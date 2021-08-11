from .db import db
from .user import User
from .league import League
from .player_cards import player_cards
from .team_likes import team_likes
from .trade_request import Trade_Request


class Team(db.Model):
  __tablename__ = 'teams'
  __table_args__ = (
    db.UniqueConstraint('user_id', 'league_id', name="unique_team_owners"),
  )

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(60), nullable = False, unique = True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False )
  league_id = db.Column(db.Integer, db.ForeignKey("leagues.id"), nullable = False)

  league = db.relationship("League", back_populates="teams")
  
  user = db.relationship("User", back_populates="teams")
  players = db.relationship("Player", secondary=player_cards)
  user_likes = db.relationship("User", secondary=team_likes)
  made_trade_requests = db.relationship(
      "Trade_Request", primaryjoin="teams.c.id==Trade_Request.requesting_team_id")
  received_trade_requests = db.relationship("Trade_Request", primaryjoin="teams.c.id==Trade_Request.recipient_team_id")
  
  def to_dict_basic(self):
    return {
      "id": self.id,
      "name": self.name,
    }

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "user": self.user.to_dict(),
      "league": self.league.to_dict_basic(),
      "players": [player.to_dict() for player in self.players],
      "made_trade_requests": [made_trade_request.to_dict() for made_trade_request in self.made_trade_requests],
      "received_trade_requests": [received_trade_request.to_dict() for received_trade_request in self.received_trade_requests]
    }

  def to_dict_no_league(self):
    return {
        "id": self.id,
        "name": self.name,
        "user": self.user.to_dict(),
        # "league": self.league.to_dict_basic(),
        "players": [player.to_dict() for player in self.players]
      }

  def to_dict_no_league_no_tradereq(self):
    return {
        "id": self.id,
        "name": self.name,
        "user": self.user.to_dict(),
        # "league": self.league.to_dict_basic(),
        "players": [player.to_dict() for player in self.players]
      }
