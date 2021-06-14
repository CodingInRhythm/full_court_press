from app.models import db, League , User, Player

def seed_leagues():

    users = User.query.all()
    players = Player.query.all()

    league_funtimes = League(name = "Funtimes", users_in=[
        users[0], users[1], users[2], users[3], users[4], users[5], users[6], users[7]
        ], owner=users[5])

    league_betallyourmoney = League(name = "Bet all your money", users_in=[users[0], users[1], users[8], users[9], users[10]], owner=users[1])

    league_nbafans = League(name = "Nba Fans", users_in=[users[0], users[11], users[12]], owner=users[0])

    league_alexsleague = League(name="Alex's League", users_in=[users[0]], owner=users[0])

    league_backdoorcut = League(name="Backdoor Cut", users_in=[users[5], users[10], users[15], users[20]], owner=users[5])

    league_behindthearc = League(name="Behind the Arc", users_in=[ users[6], users[11], users[16], users[21], users[22], users[23]], owner=users[11])
    
    league_passdribbleshoot = League(name="Pass, Dribble, Shoot", users_in=[ users[7], users[12], users[25], users[30], users[33], users[23], users[39]], owner=users[33])
    
    league_leagueofchampions = League(name="League of Champions", users_in=[users[3]], owner=users[3])
    
    leagues = [
        league_funtimes, league_betallyourmoney, league_nbafans, league_alexsleague,
        league_backdoorcut, league_behindthearc, league_passdribbleshoot, league_leagueofchampions ]

    db.session.add_all(leagues)

    db.session.commit()

def undo_leagues(): 
    db.session.execute('TRUNCATE leagues RESTART IDENTITY CASCADE;')
    db.session.commit()