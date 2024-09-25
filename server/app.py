from flask import Flask, jsonify
import mysql.connector
from mysql.connector import Error
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="http://localhost:5173")  # Allow requests from React (localhost:5173)

# Database configuration
def create_connection():
    try:
        connection = mysql.connector.connect(
            host='localhost',
            database='hosteldb',
            user='root',
            password=''
        )
        if connection.is_connected():
            return connection
    except Error as e:
        print("Error while connecting to MySQL", e)
    return None

@app.route('/api/hostels', methods=['GET'])
def get_hostels():
    connection = create_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM hostels")
    hostels = cursor.fetchall()
    cursor.close()
    connection.close()
    return jsonify(hostels)

if __name__ == '__main__':
    app.run(debug=True)
