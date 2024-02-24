import pandas as pd
import soccerdata as sd
import asyncio
from prisma import Prisma

pd.set_option('display.max_columns', None)

async def main() -> None:

    db = Prisma()

    fbref = sd.FBref(leagues="ENG-Premier League", seasons=2023)
    print(fbref.__doc__)

    stats = ['standard'] #'keeper','keeper_adv','shooting','passing','passing_types','goal_shot_creation','defense','possession','playing_time']
    for i in stats: 
        #print(i)
        displayStat = fbref.read_team_season_stats(stat_type=i)
        for j in displayStat:
            print(j)

    #await db.connect()

    # post = await db.post.create(
    #     {
    #         'title': 'Hello from prisma!',
    #         'desc': 'Prisma is a database toolkit and makes databases easy.',
    #         'published': True,
    #     }
    # )
    # print(f'created post: {post.json(indent=2, sort_keys=True)}')

    # found = await db.post.find_unique(where={'id': post.id})
    # assert found is not None
    # print(f'found post: {found.json(indent=2, sort_keys=True)}')

    # await db.disconnect()


if __name__ == '__main__':
    asyncio.run(main())