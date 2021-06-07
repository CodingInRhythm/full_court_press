from app.models import db, Team, Player, User, League

def seed_teams():

    players = Player.query.all()
    print(players)
    users = User.query.all()
    print(users)
    league1 = League.query.get(1)
    league2 = League.query.get(2)
    league3 = League.query.get(3)
    league1.players = [players[0], players[1], players[2], players[3], players[4]]
    # league2.players = [players[0], players[1], players[2]]
    league3.players = [players[0], players[1], players[2], players[3], players[4]]
    thedragons = Team(name='The Dragons', user_id = 3, league_id = 1, user_likes=[users[0], users[1]])
    thedevils = Team(name='The Devils', user_id = 1, league=league2, players=[players[0], players[1], players[2]])
    thedemons = Team(name='The Demons', user_id = 2, league_id = 3)
    theprettybutterflies = Team(name='The Pretty Butterflies', user_id = 2, league_id =2)
    theuglysnails = Team(name="The ugly snails", user_id = 3, league_id = 3)

    teams = [thedemons, thedevils, thedragons, theprettybutterflies, theuglysnails]
    
    db.session.add_all(teams)

    db.session.commit()

def undo_teams():
    db.session.execute('TRUNCATE teams RESTART IDENTITY CASCADE;')
    db.session.commit()