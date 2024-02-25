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
        team_data[team]= await db.teams.find_unique(where={'TeamName': team}, include={'standard': True, 'possession': True, 'goalshot': True})
    await db.disconnect()
    res = scoreTeams(team_data)
    return jsonify(res)

@app.route("/api/test", methods=['GET'])
def repodata():
    return f"<p>Test<p>"

standard_weights = {'MP_pt':0,
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
  'xG_exp': 1,
  'npxG_exp': 1,
  'xAG_exp': 1,
  'npxG_xAG_exp': 1,
  'PrgC': 1,
  'PrgP': 1,
  'Gls_ninety': 1,
  'Ast_ninety': 1,
  'G_A_ninety': 1,
  'G_PK_ninety': 1,
  'G_A_PK_ninety': 1,
  'xG_ninety': 1,
  'xAG_ninety': 1,
  'xG_xAG_ninety': 1,
  'npxG_ninety': 1,
  'npxG_xAG_ninety': 1
}
possession_weights = {'Touches_T': 0.7,
  'Def_Pen_T': 0.4,
  'Def_3rd_T' : 0.2,
  'Mid_3rd_T' : 0.5,
  'Att_3rd_T' : 0.4,
  'Att_Pen_T' : 0.6,
  'Live_T': 0.8,
  'Att_TO' : 0.3,
  'Succ_TO' : 0.5,
  'Succ_Per_TO' : 0.4,
  'Tkld_TO' : 0.3,
  'Tkld_Per_TO' : 0.3,
  'Carries_C': 0.4,
  'TotDist_C': 0.5,
  'PrgDist_C' : 0.6,
  'PrgC_C' : 0.6,
  'third_C' : 0.6,
  'CPA_C' : 0.7,
  'Mis_C': -0.2,
  'Dis_C' : -0.3,
  'Rec_R' : 0.4,
  'PrgR_R' : 0.4,
}
goalshots_weights = {'SCA_ST': 0.7,
  'SCA90_ST': 0.6,
  'PassLive_ST': 0.6,
  'PassDead_ST': -0.2,
  'TO_ST': 0.3,
  'Sh_ST': 0.3,
  'Fld_ST': 0.3,
  'Def_ST': 0.3,
  'GCA_G': 0.8,
  'GCA90_G': 0.8,
  'PassLive_GT': 0.6,
  'PassDead_GT': -0.2,
  'TO_GT': 0.7,
  'Sh_GT': 0.7,
  'Fld_GT': 0.7,
  'Def_GT': 0.7}
TOTAL_WEIGHT = sum([i for i in (list(standard_weights.values()) + list(possession_weights.values()) + list(goalshots_weights.values())) if i >= 0])
print(TOTAL_WEIGHT)
def scoreTeams(data):
    result = {i: 0 for i in data.keys()}
    tables = ['standard', 'possession', 'goalshot']
    team_names = [i for i in data.keys()]
    for table in tables:
        weights = {}
        match table:
            case 'standard':
                weights =  standard_weights
            case 'possession':
                weights = possession_weights
            case 'goalshot':
                weights = goalshots_weights
        for t in zip(*[getattr(i, table) for i in data.values()]):
            for b in zip(*[i for i in t]):
                if b[0][0] == 'TeamName' or b[0][0] == 'teamRel':
                    continue
                maxScore = max(*[j[1] for j in b])
                if(maxScore != 0):
                    for i in range(len(b)):
                        result[team_names[i]] += weights[b[i][0]] * (b[i][1] / maxScore)
    for i in result.keys():
        result[i]/=TOTAL_WEIGHT
    return result


def getFutureMatches(num) -> dict:
    request("https://www.google.com/search?client=firefox-b-1-d&q=upcoming+premier+league+games&dlnr=1&sei=bYfaZf-_BZmx0PEPi_mcyAI#dlnr=1&sie=lg;/g/11sk7gnh6c;2;/m/02_tc;mt;fp;1;;;")
    soup = BeautifulSoup()