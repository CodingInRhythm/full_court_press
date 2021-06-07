from flask import Blueprint, request
from app.models import User, db, Player, Team,League
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required

team_routes = Blueprint('teams', __name__)

@team_routes.route('/')
def teams():
    teams = Team.query.all()
    return {"teams": [team.to_dict() for team in teams]}

@team_routes.route('/<int:teamid>', methods=['DELETE'])
def remove_players(teamid):
    team = Team.query.filter(Team.id == teamid).first()
    player = Player.query.filter(Player.id == request.json["playerid"]).first()
    league = League.query.filter(League.id == team.id).first()
    team.players.remove(player)
    league.players.remove(player)
    db.session.commit()
    print("Making this call?")
    return "something"

@team_routes.route('/add', methods=['POST'])
def add_team():
    print(request.json)
    team = Team(name=request.json['name'], user_id=request.json['user_id'], league_id=request.json['league_id'])
    db.session.add(team)
    db.session.commit()
    return "Success"