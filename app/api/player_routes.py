from flask import Blueprint, request
from app.models import User, db, Player, Team, League
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required


player_routes = Blueprint('players', __name__)

@player_routes.route('/')
def players():
    print('made it inside player routes')
    players = Player.query.all()
    print(players)
    return {"players": [player.to_dict() for player in players]}

@player_routes.route('/', methods=["POST"])
def add_player():
    player = Player.query.get(request.json["playerid"])
    print(player)
    team = Team.query.get(request.json["teamid"])
    print(team)
    league = team.league
    print('!!!!!!!!!!!!!!')
    print(league)
    team.players.append(player)
    league.players.append(player)
    db.session.commit()
    return player.to_dict()
