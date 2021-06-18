from.db import db

class Trade_Request(db.Model):
    __tablename__ = "trade_requests"

    id = db.Column(db.Integer, primary_key = True)
    requesting_team_id = db.Column("requesting_team_id", db.ForeignKey("teams.id"), primary_key=True)
    recipient_team_id = db.Column("recipient_team_id", db.ForeignKey("teams.id"), primary_key=True)
    player_sending_id = db.Column("player_sending_id", db.ForeignKey("players.id"), primary_key=True)
    player_receiving_id = db.Column("player_receiving_id", db.ForeignKey("players.id"), primary_key=True)

    requesting_team = db.relationship("Team", primaryjoin="trade_requests.c.requesting_team_id==Team.id")
    receiving_team = db.relationship("Team", primaryjoin="trade_requests.c.recipient_team_id==Team.id")
    player_sending = db.relationship("Player", primaryjoin="trade_requests.c.player_sending_id==Player.id")
    player_receiving = db.relationship("Player", primaryjoin="trade_requests.c.player_receiving_id==Player.id")

    