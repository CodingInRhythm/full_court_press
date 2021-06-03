from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from ..models.team import Team

team_routes = Blueprint('teams', __name__)

@team_routes.route('/')
def teams():
    teams = Team.query.all()
    return {"teams": [team.to_dict() for team in teams]}

@team_routes.route('/<int:id>')
def players():
    #TODO WRITE ROUTE THAT WILL GET ALL THE PLAYERS IN LEAGUE.league_routes
    #for example, if i hit /1, 
    #
    pass