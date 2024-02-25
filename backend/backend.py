from flask import Flask, jsonify, request
import random as rand
import json
from bs4 import BeautifulSoup
from flask_cors import CORS
from prisma import Prisma

app = Flask(__name__)
CORS(app)

db = Prisma()

@app.route("/hello", methods=['GET'])
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/api/getPrediction", methods=['GET'])
async def repo():
    teams = request.args.get('teams')
    teams = json.loads(teams)
    await db.connect()
    team_data = {}
    for team in teams:
        team_data[team]= await db.standard.find_unique(where={'TeamName': team})
    await db.disconnect()
    res = scoreTeams(team_data)
    return jsonify(res)

@app.route("/api/test", methods=['GET'])
def repodata():
    return f"<p>Test<p>"

weights = {'MP_pt': 0,
  'Starts_pt': 0,
  'Min_pt': 0,
  'minPlayed_pt': 0,
  'Gls_P_perf': 1,
  'Ast_perf': 1,
  'G_A_perf': 1,
  'G_PK_perf': 1,
  'PK_perf': 1,
  'PKatt_perf': 1,
  'CrdY_perf': -0.2,
  'CrdR_perf': -0.5,
  'xG_exp': 0.5,
  'npxG_exp': 0.5,
  'xAG_exp': 0.5,
  'npxG_xAG_exp': 0.5,
  'PrgC': 1,
  'PrgP': 1,
  'Gls_ninety': 1,
  'Ast_ninety': 1,
  'G_A_ninety': 1,
  'G_PK_ninety': 1,
  'G_A_PK_ninety': 1,
  'xG_ninety': 0.5,
  'xAG_ninety': 0.5,
  'xG_xAG_ninety': 0.5,
  'npxG_ninety': 0.5,
  'npxG_xAG_ninety': 0.5
}
TOTAL_WEIGHT = sum([i for i in weights.values()])

def scoreTeams(team_data):
    result = {i: 0 for i in team_data.keys()}
    print(result)
    team_names = []
    for b in zip(*[i for i in team_data.values()]):
        if b[0][0] == 'TeamName':
            team_names = [i[1] for i in b]
            continue
        maxScore = max(*[j[1] for j in b])
        for i in range(len(b)):
            result[team_names[i]] += weights[b[i][0]] * (b[i][1] / maxScore)
    for i in result.keys():
        result[i]/=TOTAL_WEIGHT
    return result


def getFutureMatches(num) -> dict:
    request("https://www.google.com/search?client=firefox-b-1-d&q=upcoming+premier+league+games&dlnr=1&sei=bYfaZf-_BZmx0PEPi_mcyAI#dlnr=1&sie=lg;/g/11sk7gnh6c;2;/m/02_tc;mt;fp;1;;;")
    soup = BeautifulSoup()