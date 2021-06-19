from flask import Blueprint, request
from app.models import db, Trade_Request


trade_request_routes = Blueprint('trade_requests', __name__)

@trade_request_routes.route('/', methods=['POST'])
def trade_request():
    print('!!!!!!', request.json)
    new_request=Trade_Request(
        requesting_team_id=request.json["requesting_team_id"],
        recipient_team_id=request.json["recipient_team_id"],
        player_sending_id=request.json["player_sending_id"],
        player_receiving_id=request.json["player_receiving_id"])
    print(new_request)
    db.session.add(new_request)
    db.session.commit()
    return "none"