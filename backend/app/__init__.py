from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import os

def create_app():
    load_dotenv()
    app = Flask(__name__)

    # Enable CORS for all routes and origins
    CORS(app)

    @app.route("/items")
    def items():
        return {"items": ["Item1", "Item2", "Item3"]}

    return app