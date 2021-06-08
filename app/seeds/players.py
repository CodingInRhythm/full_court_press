from app.models import db, Player

def seed_players():

    lebron = Player(name= 'Lebron James', ppg=25.6, assists=10.0, rebounds=5.7)

    steph = Player(name= 'Steph Curry', ppg=30.6, assists=8.0, rebounds=12.7)

    kevin = Player(name= 'Kevin Durant', ppg=29.6, assists=5.0, rebounds=7.7)

    james = Player(name= 'James Harden', ppg=35.6, assists=11.0, rebounds=9.7)

    julius = Player(name= 'Julius Randle', ppg=24.6, assists=4.0, rebounds=8.2)

    kyrie = Player(name = 'Kyrie Irving', ppg=22.0, assists=5.5, rebounds=3.0)

    players = [lebron, steph, kevin, james, julius, kyrie]

    db.session.add_all(players)

    db.session.commit()

def undo_players():
    db.session.execute('TRUNCATE players RESTART IDENTITY CASCADE;')
    db.session.commit()