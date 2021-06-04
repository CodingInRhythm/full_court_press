from flask import Blueprint, jsonify
from flask_login import current_user, login_required
from app.models import User, db, League

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/joinleague/<int:leagueid>')
def joinleague(leagueid):
    print('LEAGUEID', leagueid)
    print('userid', current_user.id)
    user = User.query.get(current_user.id)
    league = League.query.filter(League.id == leagueid).first()
    print(user.leagues_in)
    user.leagues_in.append(league)
    print(user.leagues_in)
    db.session.commit()
    return "hello"