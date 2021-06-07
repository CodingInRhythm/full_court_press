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
    player = Player.query.filter(Player.id == request.json["playerid"]).first()
    print(player)
    team = Team.query.filter(Team.id == request.json["teamid"]).first()
    print(team)
    league = League.query.filter(League.id == team.league_id).first()
    print('!!!!!!!!!!!!!!')
    print(league)
    team.players.append(player)
    league.players.append(player)
    db.session.commit()
    return {"player": player.to_dict()}
