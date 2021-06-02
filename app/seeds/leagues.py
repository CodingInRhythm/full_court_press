from app.models import db, League 

def seed_leagues():

    league_funtimes = League(name = "Funtimes")

    league_betallyourmoney = League(name = "Bet all your money")

    leage_nbafans = League(name = "NbaFans")

    leagues = [league_funtimes, league_betallyourmoney, leage_nbafans]

    db.session.add_all(leagues)

    db.session.commit()

def undo_leagues(): 
    db.session.execute('TRUNCATE leagues RESTART IDENTITY CASCADE;')
    db.session.commit()