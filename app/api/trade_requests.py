from flask import Blueprint, request
from app.models import db, Team, Trade_Request, Player


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

@trade_request_routes.route('/', methods=['PUT'])
def trade_action():
    print(request.json["trade_id"])
    tradereq = Trade_Request.query.get(request.json["trade_id"])
    print(tradereq.requesting_team_id)
    team1 = Team.query.get(tradereq.requesting_team_id)
    team2 = Team.query.get(tradereq.recipient_team_id)
    player1 = Player.query.get(tradereq.player_sending_id)
    player2 = Player.query.get(tradereq.player_receiving_id)
    team1.players.remove(player1)
    team1.players.append(player2)
    team2.players.remove(player2)
    team2.players.append(player1)
    db.session.delete(tradereq)
    db.session.commit()

    '''
        # ToDO: 
        
        1- Set up actual trade request button
        Confirm trade?
        
        1 - Query both teams and both players by id
        2 - 
            a - Remove player1 from team 1
            b - Insert player 1 into team 2
            c - Repeat for player2
        3 - Delete trade from table

        OR 

        Reject trade

        1 - Delete trade from table
    '''
    return {'message': "Confirm!"}