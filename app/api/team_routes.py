from flask import Blueprint
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
    pass