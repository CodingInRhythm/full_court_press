from app.models import db, Team

def seed_teams():

    thedragons = Team(name='The Dragons', user_id = 3, league_id = 1)
    thedevils = Team(name='The Devils', user_id = 1, league_id = 2)
    thedemons = Team(name='The Demons', user_id = 2, league_id = 3)
    theprettybutterflies = Team(name='The Pretty Butterflies', user_id = 2, league_id =2)
    theuglysnails = Team(name="The ugly snails", user_id = 3, league_id = 3)

    teams = [thedemons, thedevils, thedragons, theprettybutterflies, theuglysnails]
    db.session.add_all(teams)

    db.session.commit()

def undo_teams():
    db.session.execute('TRUNCATE teams RESTART IDENTITY CASCADE;')
    db.session.commit()