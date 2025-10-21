from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os

def create_app():
    load_dotenv()
    app = Flask(__name__)

    # Enable CORS for all routes and origins
    CORS(app)

    @app.route("/api/items", methods=['GET'])
    def items():
        return jsonify(
            {
                "items":[
                    'item1',
                    'phone',
                    'item3'
                ]
            }
        )

    return app