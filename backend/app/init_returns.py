import sqlite3

def init_db():
    try:
        conn = sqlite3.connect('return.db')
        cursor = conn.cursor()
        with open('init_returns.sql', 'r') as f:
            cursor.executescript(f.read())
        conn.commit()
        print("Database and tables created successfully.")
    except Exception as e:
        print("Error:", e)
    finally:
        conn.close()

if __name__ == "__main__":
    init_db()