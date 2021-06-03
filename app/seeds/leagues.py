from app.models import db, League , User, Player

def seed_leagues():

    users = User.query.all()
    players = Player.query.all()
    print(users)
    league_funtimes = League(name = "Funtimes")

    league_betallyourmoney = League(name = "Bet all your money", users_in=[users[0], users[1]], players=[players[0], players[1], players[2]])

    leage_nbafans = League(name = "NbaFans")

    leagues = [league_funtimes, league_betallyourmoney, leage_nbafans]

    db.session.add_all(leagues)

    db.session.commit()

def undo_leagues(): 
    db.session.execute('TRUNCATE leagues RESTART IDENTITY CASCADE;')
    db.session.commit()