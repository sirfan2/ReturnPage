from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
from sqlite3 import Connection, connect
from uuid import uuid4

app = FastAPI()

# Get new database connection per request
def get_db_connection():
    return connect("return.db")

#  Define data models
class OrderItem(BaseModel):
    item_id: str
    item_name: str
    item_sku: str

class OrderResponse(BaseModel):
    order_id: str
    purchase_date: str
    items: List[OrderItem]

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
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO returns (return_id, order_id, return_reason, return_date, status, warehouse_id) VALUES (?, ?, ?, ?, ?, ?)",
        (return_id, request.order_id, request.reason, request.date, "Pending", request.warehouse_id)
    )
    cursor.commit()
    label_url = f"http://example.com/labels/{return_id}.pdf"
    cursor.close()
    conn.close()
    return ReturnResponse(return_id=return_id, status="Submitted", label_url=label_url)

# Generate shipping label
@app.post("/returns/{return_id}/label", response_model=dict)
def generate_shipping_label(return_id: str):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT return_id FROM returns WHERE return_id = ?", (return_id,))
    row = cursor.fetchone()
    if row:
        label_url = f"http://example.com/labels/{return_id}.pdf"
        cursor.execute(
            "INSERT INTO shippinglabels (label_id, return_id, label_url, created_at) VALUES (?, ?, ?, datetime('now'))",
            (str(uuid4()), return_id, label_url)
        )
        cursor.commit()
        cursor.close()
        conn.close()
        return {"label_url": label_url}
    else:
        cursor.close()
        conn.close()
        return {"error": "Return not found"}

# Get order_id, purchase_date, and items for an order
@app.get("/orders/{order_id}", response_model=OrderResponse)
def get_order(order_id: str):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT order_id, purchase_date FROM ORDERS WHERE order_id = ?", (order_id,))
    order_row = cursor.fetchone()
    if not order_row:
        cursor.close()
        conn.close()
        raise HTTPException(status_code=404, detail="Order not found")  
    cursor.execute("SELECT item_id, item_name, item_sku FROM order_items WHERE order_id = ?", (order_id,))
    items = [OrderItem(item_id=row[0], item_name=row[1], item_sku=row[2]) for row in cursor.fetchall()]
    order_response = OrderResponse(order_id=order_row[0], purchase_date=order_row[1], items=items)  
    cursor.close()
    conn.close()
    return order_response


# Get all items for an order
@app.get("/orders/{order_id}/items", response_model=list[OrderItem])
def get_order_items(order_id: str):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT item_id, item_name, item_sku FROM order_items WHERE order_id = ?", (order_id,))
    cursor.close()
    conn.close()
    return [OrderItem(item_id=row[0], item_name=row[1], item_sku=row[2]) for row in cursor.fetchall()]

# Get return status
@app.get("/returns/{return_id}", response_model=ReturnResponse)
def get_return_status(return_id: str):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT return_id, status FROM returns WHERE return_id = ?", (return_id,))
    row = cursor.fetchone()
    if row:
        label_url = f"http://example.com/labels/{return_id}.pdf"
        cursor.close()
        conn.close()
        return ReturnResponse(return_id=row[0], status=row[1], label_url=label_url)
    else:
        cursor.close()
        conn.close()
        return {"error": "Return not found"}
    
# Get all returns for an order
@app.get("/orders/{order_id}/returns", response_model=list[ReturnResponse])
def get_returns_for_order(order_id: str):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT return_id, status FROM returns WHERE order_id = ?", (order_id,))
    rows = cursor.fetchall()
    responses = []
    for row in rows:
        label_url = f"http://example.com/labels/{row[0]}.pdf"
        responses.append(ReturnResponse(return_id=row[0], status=row[1], label_url=label_url))
    cursor.close()
    conn.close()
    return responses
    
# Update return status
@app.put("/returns/{return_id}/status", response_model=dict)
def update_return_status(return_id: str, status: str):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("UPDATE returns SET status = ? WHERE return_id = ?", (status, return_id))
    cursor.commit()
    if cursor.rowcount:
        cursor.close()
        conn.close()
        return {"message": "Status updated successfully"}
    else:
        cursor.close()
        conn.close()
        return {"error": "Return not found"}
    
# Run the app with Uvicorn
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="localhost", port=8000, reload=True)