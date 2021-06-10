from app.models import db, Team, Player, User, League

def seed_teams():

    players = Player.query.all()
    users = User.query.all()
    league_funtimes = League.query.get(1)
    league_betallyourmoney = League.query.get(2)
    league_nbafans = League.query.get(3)
    league_alexsleague = League.query.get(4)
    # league1.players = [players[0], players[1], players[2], players[3], players[4]]
    league_betallyourmoney.players = [players[0], players[1], players[2], players[5]]
    # league3.players = [players[0], players[1], players[2], players[3], players[4]]

    thedragonsplayers = [player for player in players if (player.id % 5 == 0) and player.id < 26]
    puredominationplayers = [player for player in players if (player.id % 5 == 1) and player.id < 22]
    brooklynnetsfanplayers = [player for player in players if (player.id % 5 == 2) and player.id < 23]
    lebronplayers = [player for player in players if (player.id % 5 == 3) and player.id < 24]
    varsityplayers = [player for player in players if (player.id % 5 == 4) and player.id < 25]
    swishplayers = [player for player in players if (player.id % 5 == 1) and player.id >= 26]
    behindthebackplayers = [player for player in players if (player.id % 5 == 2) and player.id >= 27 and player.id <50]
    fromwaydowntownplayers = [player for player in players if (player.id % 5 == 3) and player.id >= 28 and player.id < 50]


    # Demo user teams
    thedragons = Team(name='The Dragons', user_id = 1, league_id = 1, players=thedragonsplayers, user_likes=[users[0], users[1]])
    thedevils = Team(name='The Devils', user_id = 1, league_id=2, players=[players[0], players[1], players[2]])
    thedemons = Team(name='The Demons', user_id = 1, league_id = 3)
    thecowboys = Team(name= 'The Cowboys', user_id = 1, league_id=4)


    #user 2 team
    puredomination = Team(name='Pure Domination', user_id=2, league_id=1, players=puredominationplayers)
    theprettybutterflies = Team(name='The Pretty Butterflies', user_id = 2, league_id =2)

    #user 3 teams
    brooklynnetsfan = Team(name="Brooklyn Nets fan", user_id=3, league_id=1, players=brooklynnetsfanplayers)
    theuglysnails = Team(name="The ugly snails", user_id = 3, league_id = 3)

    #user4 teams
    lebron = Team(name="King Lebron James", user_id=4, league_id=1, players=lebronplayers)

    #user5 teams
    varsity = Team(name="Varsity Squad", user_id=5, league_id=1, players=varsityplayers)

    #user6 teams
    swish = Team(name="Team Swish", user_id=6, league_id=1, players=swishplayers)

    #user7 teams

    behindtheback = Team(name="Behind the back", user_id=7, league_id=1, players=behindthebackplayers)

    #user8 teams

    fromwaydowntown = Team(name="From wayyy downtown", user_id=8, league_id=1, players=fromwaydowntownplayers)

    teams = [thedemons, thedevils, thedragons, thecowboys, theprettybutterflies, theuglysnails, 
    puredomination, brooklynnetsfan, lebron, varsity, swish, behindtheback, fromwaydowntown]
    
    league_funtimes.players = thedragonsplayers + puredominationplayers + brooklynnetsfanplayers + lebronplayers + varsityplayers + swishplayers + behindthebackplayers + fromwaydowntownplayers

    db.session.add_all(teams)

    
    db.session.commit()

def undo_teams():
    db.session.execute('TRUNCATE teams RESTART IDENTITY CASCADE;')
    db.session.commit()