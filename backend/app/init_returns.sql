-- backend/app/init_returns.sql
-- This script initializes the returns database schema and inserts mock data.
-- SQL script to drop tables if they exist
DROP TABLE IF EXISTS SHIPPINGLABELS;
DROP TABLE IF EXISTS WAREHOUSES;
DROP TABLE IF EXISTS RETURNS;
DROP TABLE IF EXISTS ORDER_ITEMS;
DROP TABLE IF EXISTS ORDERS;

-- SQL script to initialize the returns database schema
CREATE TABLE IF NOT EXISTS ORDERS (
    order_id TEXT PRIMARY KEY,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    purchase_date TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS ORDER_ITEMS (
    item_id TEXT PRIMARY KEY,
    order_id TEXT NOT NULL,
    item_name TEXT NOT NULL,
    item_sku TEXT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES ORDERS(order_id)
);

CREATE TABLE IF NOT EXISTS RETURNS (
    return_id TEXT PRIMARY KEY,
    order_id TEXT,
    item_id TEXT NOT NULL,
    return_reason TEXT NOT NULL,
    return_date TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'Pending',
    warehouse_id INTEGER,
    FOREIGN KEY (order_id) REFERENCES ORDERS(order_id)
);

CREATE TABLE IF NOT EXISTS WAREHOUSES (
    warehouse_id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    zip_code INTEGER NOT NULL,
    capacity INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS SHIPPINGLABELS (
    label_id TEXT PRIMARY KEY,
    return_id INTEGER,
    label_url TEXT NOT NULL,
    created_at TEXT NOT NULL,
    FOREIGN KEY (return_id) REFERENCES RETURNS(return_id)
);

-- Create indexes for performance optimization
-- CREATE INDEX idx_returns_order ON RETURNS(order_id);

-- Insert mock data
INSERT INTO ORDERS (order_id, customer_name, customer_email, purchase_date) VALUES
('1001', 'Alex Smith', 'alex@example.com', '2023-10-01'),
('1002', 'Jamie Doe', 'jamie@example.com', '2023-10-05'),
('1003', 'Taylor Lee', 'taylor@example.com', '2023-10-10');

INSERT INTO ORDER_ITEMS (item_id, order_id, item_name, item_sku) VALUES
('item-1', '1001', 'Wireless Mouse', 'WM123'),
('item-2', '1002', 'Bluetooth Keyboard', 'BK456'),
('item-3', '1003', 'USB-C Hub', 'UH789'),
('item-4', '1001', 'Mouse Pad', 'MP321');

INSERT INTO WAREHOUSES (name, address, city, state, zip_code, capacity) VALUES
('Warehouse A', '123 Main St', 'Springfield', 'IL', 62701, 1000),
('Warehouse B', '456 Elm St', 'Madison', 'WI', 53703, 1500),
('Warehouse C', '789 Oak St', 'Austin', 'TX', 73301, 2000);

INSERT INTO RETURNS (return_id, order_id, item_id, return_reason, return_date, status, warehouse_id) VALUES
('return-1', '1001', 'item-1', 'Defective item', '2023-10-15', 'Pending', 1),
('return-2', '1002', 'item-2', 'Wrong item sent', '2023-10-16', 'Pending', 2),
('return-3', '1003', 'item-3', 'No longer needed', '2023-10-17', 'Pending', 3);