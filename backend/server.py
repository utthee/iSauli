from flask import Flask

app = Flask(__name__)

# API route
@app.route("/items")
def items():
    return {"items": ["Item1", "Item2", "Item3"]}

if __name__ == "__main__":
    app.run(debug=True)