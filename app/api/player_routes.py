from flask import Blueprint
from app.models import User, db, Player
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

# @league_routes.route('/<int:league_id>')
# def teams(league_id):
#     league = League.query.get(league_id)
#     print(league)
#     return {"league": [league.to_dict()],}
