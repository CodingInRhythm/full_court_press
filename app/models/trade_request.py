from.db import db

class Trade_Request(db.Model):
    __tablename__ = "trade_requests"

    id = db.Column(db.Integer, primary_key = True)
    requesting_team_id = db.Column(db.Integer, db.ForeignKey("teams.id"))
    recipient_team_id = db.Column(db.Integer, db.ForeignKey("teams.id"))
    player_sending_id = db.Column(db.Integer, db.ForeignKey("players.id"))
    player_receiving_id = db.Column(db.Integer, db.ForeignKey("players.id"))

    requesting_team = db.relationship("Team", primaryjoin="trade_requests.c.requesting_team_id==Team.id")
    receiving_team = db.relationship("Team", primaryjoin="trade_requests.c.recipient_team_id==Team.id")
    player_sending = db.relationship("Player", primaryjoin="trade_requests.c.player_sending_id==Player.id")
    player_receiving = db.relationship("Player", primaryjoin="trade_requests.c.player_receiving_id==Player.id")

    #Need to make an db.index to ensure no repeats of trade (i.e. combo of player_sending and receiving is unique)