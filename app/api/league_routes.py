from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required

league_routes = Blueprint('leagues', __name__)

@league_routes.route('/<int:id>')
def players():
    #TODO WRITE ROUTE THAT WILL GET ALL THE PLAYERS IN LEAGUE.league_routes
    #for example, if i hit /1, 
    #
    pass