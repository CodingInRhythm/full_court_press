import json

from app.models import db, Player

def seed_players():

    # lebron = Player(name= 'Lebron James', ppg=25.6, assists=10.0, rebounds=5.7)

    # steph = Player(name= 'Steph Curry', ppg=30.6, assists=8.0, rebounds=12.7)

    # kevin = Player(name= 'Kevin Durant', ppg=29.6, assists=5.0, rebounds=7.7)

    # f = exec(open("seeders.txt", "r").read())

    # julius = Player(name= 'Julius Randle', ppg=24.6, assists=4.0, rebounds=8.2)

    # kyrie = Player(name = 'Kyrie Irving', ppg=22.0, assists=5.5, rebounds=3.0)

    # players = [lebron, steph, kevin, f, julius, kyrie]

    # db.session.add_all(players)

    # db.session.commit()

    players = []
    listOfPlayerObjects = json.loads(open('seeddata.json').read()) 

    for player_obj in listOfPlayerObjects:
        info = player_obj["athlete"]
        player = Player(
            name=info['fullName'],
            position=info['position']['abbreviation'],
            photo=info['headshot']['href'],
            team_photo= info['team']['logos'][0]['href'],
            nba_team=info['team']['displayName'],
            ppg = info["statsSummary"]["statistics"][0]['displayValue'],
            rebounds = info["statsSummary"]["statistics"][1]['displayValue'],
            assists = info["statsSummary"]["statistics"][2]['displayValue'], 
        )
        db.session.add(player)

    db.session.commit()

def undo_players():
    db.session.execute('TRUNCATE players RESTART IDENTITY CASCADE;')
    db.session.commit()