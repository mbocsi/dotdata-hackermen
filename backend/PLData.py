import pandas as pd
pd.set_option('display.max_columns', None)

import soccerdata as sd

fbref = sd.FBref(leagues="ENG-Premier League", seasons=2023)
print(fbref.__doc__)


passingData = fbref.read_team_season_stats(stat_type="passing")
passingData.head()
shootingData = fbref.read_team_season_stats(stat_type="shooting")
shootingData.head()

print(passingData)
print(shootingData)