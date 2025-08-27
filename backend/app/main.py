from fastapi import FastAPI
from pydantic import BaseModel
from sqlite3 import Connection, connect
from uuid import uuid4

app = FastAPI()
db_connection: Connection = connect("database.db")

#  Define your data models

class OrderItem(BaseModel):
    item_id: str
    item_name: str
    item_sku: str

class OrderResponse(BaseModel):
    order_id: str
    customer_name: str
    customer_email: str
    purchase_date: str
    items: list[OrderItem]

class ReturnRequest(BaseModel):
    order_id: str
    item_id: str
    reason: str
    date: str
    warehouse_id: str

class ReturnResponse(BaseModel):
    return_id: str
    status: str
    label_url: str


# API Endpoints
# Post a new return request
@app.post("/returns", response_model=ReturnResponse)
def create_return(request: ReturnRequest):
    return_id = str(uuid4())
    cursor = db_connection.cursor()
    cursor.execute(
        "INSERT INTO returns (return_id, order_id, return_reason, return_date, status, warehouse_id) VALUES (?, ?, ?, ?, ?, ?)",
        (return_id, request.order_id, request.reason, request.date, "Pending", request.warehouse_id)
    )
    db_connection.commit()
    label_url = f"http://example.com/labels/{return_id}.pdf"
    return ReturnResponse(return_id=return_id, status="Submitted", label_url=label_url)

# Generate shipping label
@app.post("/returns/{return_id}/label", response_model=dict)
def generate_shipping_label(return_id: str):
    cursor = db_connection.cursor()
    cursor.execute("SELECT return_id FROM returns WHERE return_id = ?", (return_id,))
    row = cursor.fetchone()
    if row:
        label_url = f"http://example.com/labels/{return_id}.pdf"
        cursor.execute(
            "INSERT INTO shippinglabels (label_id, return_id, label_url, created_at) VALUES (?, ?, ?, datetime('now'))",
            (str(uuid4()), return_id, label_url)
        )
        db_connection.commit()
        return {"label_url": label_url}
    else:
        return {"error": "Return not found"}

# Get order details and all items for an order
@app.get("/orders/{order_id}", response_model=OrderResponse)
def get_order(order_id: str):
    cursor = db_connection.cursor()
    cursor.execute("SELECT order_id, customer_name, customer_email, purchase_date FROM orders WHERE order_id = ?", (order_id,))
    order_row = cursor.fetchone()
    if not order_row:
        return {"error": "Order not found"}
    cursor.execute("SELECT item_id, item_name, item_sku FROM order_items WHERE order_id = ?", (order_id,))
    items = [OrderItem(item_id=row[0], item_name=row[1], item_sku=row[2]) for row in cursor.fetchall()]
    return OrderResponse(
        order_id=order_row[0],
        customer_name=order_row[1],
        customer_email=order_row[2],
        purchase_date=order_row[3],
        items=items
    )

# Get all items for an order
@app.get("/orders/{order_id}/items", response_model=list[OrderItem])
def get_order_items(order_id: str):
    cursor = db_connection.cursor()
    cursor.execute("SELECT item_id, item_name, item_sku FROM order_items WHERE order_id = ?", (order_id,))
    return [OrderItem(item_id=row[0], item_name=row[1], item_sku=row[2]) for row in cursor.fetchall()]

# Get return status
@app.get("/returns/{return_id}", response_model=ReturnResponse)
def get_return_status(return_id: str):
    cursor = db_connection.cursor()
    cursor.execute("SELECT return_id, status FROM returns WHERE return_id = ?", (return_id,))
    row = cursor.fetchone()
    if row:
        label_url = f"http://example.com/labels/{return_id}.pdf"
        return ReturnResponse(return_id=row[0], status=row[1], label_url=label_url)
    else:
        return {"error": "Return not found"}
    
# Get all returns for an order
@app.get("/orders/{order_id}/returns", response_model=list[ReturnResponse])
def get_returns_for_order(order_id: str):
    cursor = db_connection.cursor()
    cursor.execute("SELECT return_id, status FROM returns WHERE order_id = ?", (order_id,))
    rows = cursor.fetchall()
    responses = []
    for row in rows:
        label_url = f"http://example.com/labels/{row[0]}.pdf"
        responses.append(ReturnResponse(return_id=row[0], status=row[1], label_url=label_url))
    return responses
    
# Update return status
@app.put("/returns/{return_id}/status", response_model=dict)
def update_return_status(return_id: str, status: str):
    cursor = db_connection.cursor()
    cursor.execute("UPDATE returns SET status = ? WHERE return_id = ?", (status, return_id))
    db_connection.commit()
    if cursor.rowcount:
        return {"message": "Status updated successfully"}
    else:
        return {"error": "Return not found"}
    

# Close the database connection on shutdown
@app.on_event("shutdown")
def shutdown_event():
    db_connection.close()

# Run the app with Uvicorn
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="localhost", port=8000, reload=True)