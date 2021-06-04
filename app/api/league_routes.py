from flask import Blueprint
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from ..models.league import League

league_routes = Blueprint('leagues', __name__)

@league_routes.route('/<int:userid>')
def leagues(userid):
    print('!!!!!!', userid)
    user = User.query.get(userid)
    print(user)
    # I want to get a list of leagues that have the user in their list of users_in

    leagues = League.query.filter(League.users_in.contains(user))
    other_leagues = League.query.filter(~League.users_in.contains(user))
    return {"leagues": [league.to_dict() for league in leagues],
           "other_leagues": [league.to_dict() for league in other_leagues]
            }

@league_routes.route('/<int:league_id>')
def teams(league_id):
    league = League.query.get(league_id)
    print(league)
    return {"league": [league.to_dict()],}


   