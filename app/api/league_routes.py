from flask import Blueprint
from app.models import User, db, Team
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from ..models.league import League

league_routes = Blueprint('leagues', __name__)

@league_routes.route('/me')
def leagues():
    
    # I want to get a list of leagues that have the user in their list of users_in
    if current_user.is_authenticated:
        leagues = current_user.leagues_in
        other_leagues = League.query.filter(~League.users_in.contains(current_user))
        
        return {"leagues": [league.to_dict() for league in leagues],
            "other_leagues": [league.to_dict() for league in other_leagues]
                }
    return {"leagues": [], "other_leagues": []}


@league_routes.route('/<int:league_id>')
def teams(league_id):
    league = League.query.get(league_id)
    myteam = Team.query.filter(Team.user_id == current_user.id).first()
    print(myteam)
    return {"league": league.to_dict(), "myteam": myteam.to_dict()}

   