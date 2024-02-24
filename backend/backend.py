from flask import Flask, jsonify, request
import random as rand
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/hello", methods=['GET'])
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/api/getPrediction", methods=['GET'])
def repo():
    teams = request.args.get('teams')
    teams = json.loads(teams)
    res = {i: round(rand.random(), 2) for i in teams}
    return jsonify(res)

@app.route("/api/test", methods=['GET'])
def repodata():
    return f"<p>Test<p>"