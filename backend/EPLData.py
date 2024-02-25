import pandas as pd
import soccerdata as sd
import asyncio
from prisma import Prisma
from tabulate import tabulate

pd.set_option('display.max_columns', None)

mapping = {
    'Playing Time_MP' : 'MP_pt',
    'Playing Time_Starts' : 'Starts_pt',
    'Playing Time_Min' : 'Min_pt',
    'Playing Time_90s' : 'minPlayed_pt',
    'Performance_Gls' : 'Gls_P_perf',
    'Performance_Ast' : 'Ast_perf',
    'Performance_G+A' : 'G_A_perf',
    'Performance_G-PK' : 'G_PK_perf',
    'Performance_PK' : 'PK_perf',
    'Performance_PKatt' : 'PKatt_perf',
    'Performance_CrdY' : 'CrdY_perf',
    'Performance_CrdR' : 'CrdR_perf',
    'Expected_xG' : 'xG_exp',
    'Expected_npxG' : 'npxG_exp',
    'Expected_xAG' : 'xAG_exp',
    'Expected_npxG+xAG' : 'npxG_xAG_exp',
    'Progression_PrgC' : 'PrgC',
    'Progression_PrgP' : 'PrgP',
    'Per 90 Minutes_Gls' : 'Gls_ninety',
    'Per 90 Minutes_Ast' : 'Ast_ninety',
    'Per 90 Minutes_G+A' : 'G_A_ninety',
    'Per 90 Minutes_G-PK' : 'G_PK_ninety',
    'Per 90 Minutes_G+A-PK' : 'G_A_PK_ninety',
    'Per 90 Minutes_xG' : 'xG_ninety',
    'Per 90 Minutes_xAG' : 'xAG_ninety',
    'Per 90 Minutes_xG+xAG' : 'xG_xAG_ninety',
    'Per 90 Minutes_npxG' : 'npxG_ninety',
    'Per 90 Minutes_npxG+xAG': 'npxG_xAG_ninety'
}

mappingPossession = {
    'Touches_Touches' : 'Touches_T',
    'Touches_Def Pen' : 'Def_Pen_T',
    'Touches_Def 3rd' : 'Def_3rd_T',
    'Touches_Mid 3rd' : 'Mid_3rd_T',
    'Touches_Att 3rd' : 'Att_3rd_T',
    'Touches_Att Pen' : 'Att_Pen_T',
    'Touches_Live' : 'Live_T',
    'Take-Ons_Att' : 'Att_TO',
    'Take-Ons_Succ' : 'Succ_TO',
    'Take-Ons_Succ%' : 'Succ_Per_TO',
    'Take-Ons_Tkld' : 'Tkld_TO',
    'Take-Ons_Tkld%' : 'Tkld_Per_TO',
    'Carries_Carries' : 'Carries_C',
    'Carries_TotDist' : 'TotDist_C',
    'Carries_PrgDist' : 'PrgDist_C',
    'Carries_PrgC' : 'PrgC_C',
    'Carries_1/3' : 'third_C',
    'Carries_CPA' : 'CPA_C',
    'Carries_Mis' : 'Mis_C',
    'Carries_Dis' : 'Dis_C',
    'Receiving_Rec' : 'Rec_R',
    'Receiving_PrgR' : 'PrgR_R',
} #touches,take-ons,carries,receiving

mappingSGSC = { #Squad Goal and Shot Creation
    'SCA_SCA' : 'SCA_ST',
    'SCA_SCA90' : 'SCA90_ST',
    'SCA Types_PassLive' : 'PassLive_ST',
    'SCA Types_PassDead' : 'PassDead_ST',
    'SCA Types_TO' : 'TO_ST',
    'SCA Types_Sh' : 'Sh_ST',
    'SCA Types_Fld' : 'Fld_ST',
    'SCA Types_Def' : 'Def_ST',
    'GCA_GCA' : 'GCA_G',
    'GCA_GCA90' : 'GCA90_G',
    'GCA Types_PassLive' : 'PassLive_GT',
    'GCA Types_PassDead' : 'PassDead_GT',
    'GCA Types_TO' : 'TO_GT',
    'GCA Types_Sh' : 'Sh_GT',
    'GCA Types_Fld' : 'Fld_GT',
    'GCA Types_Def' : 'Def_GT'
}

mappingSDA = { #Squad Defensive Actions

}

mappingShooting = { #Squad Shooting

}

async def Standard() -> None:

    db = Prisma()

    fbref = sd.FBref(leagues="ENG-Premier League", seasons=2023)
    print(fbref.__doc__)

    stats = ['standard'] #'keeper','keeper_adv','shooting','passing','passing_types','goal_shot_creation','defense','possession','playing_time']


    for i in stats: 
        #print(i)
        displayStat = fbref.read_team_season_stats(stat_type=i)
        for index, row in displayStat.iterrows():
            cols = ['Playing Time', 'Performance', 'Expected', 'Progression', 'Per 90 Minutes']
            print('  ', index[2])
            
            data = {'TeamName' : index[2]}
            for col in cols:
                print(col, row[col])
                for field, val in row[col].items():
                    key = col + '_' + field
                    data[mapping[key]] = val
            #print(data)
            await db.connect()
            await db.standard.create(data=data)
            await db.disconnect()

async def Possession() -> None:

    db = Prisma()

    fbref = sd.FBref(leagues="ENG-Premier League", seasons=2023)
    print(fbref.__doc__)

    stats = ['possession'] #'keeper','keeper_adv','shooting','passing','passing_types','goal_shot_creation','defense','possession','playing_time']

    for i in stats: 
        displayStat = fbref.read_team_season_stats(stat_type=i)
        for index, row in displayStat.iterrows():
            cols = ['Touches', 'Take-Ons', 'Carries', 'Receiving']
            print('  ', index[2])
            
            data = {'TeamName' : index[2]}
            for col in cols:
                print(col, row[col])
                for field, val in row[col].items():
                    key = col + '_' + field
                    data[mappingPossession[key]] = val
            #print(data)
            await db.connect()
            await db.possession.create(data=data)
            await db.disconnect()

async def SquadGoalShotCreation() -> None:

    db = Prisma()

    fbref = sd.FBref(leagues="ENG-Premier League", seasons=2023)
    print(fbref.__doc__)

    stats = ['goal_shot_creation'] #'keeper','keeper_adv','shooting','passing','passing_types','goal_shot_creation','defense','possession','playing_time']

    for i in stats: 
        displayStat = fbref.read_team_season_stats(stat_type=i)
        for index, row in displayStat.iterrows():
            cols = ['SCA','SCA Types','GCA','GCA Types']
            print('  ', index[2])
            
            data = {'TeamName' : index[2]}
            for col in cols:
                print(col, row[col])
                for field, val in row[col].items():
                    key = col + '_' + field
                    data[mappingSGSC[key]] = val
            #print(data)
            await db.connect()
            await db.goalshot.create(data=data)
            await db.disconnect()



if __name__ == '__main__':
    asyncio.run(SquadGoalShotCreation())