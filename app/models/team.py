from .db import db
from .user import User
from .league import League
from .player_cards import player_cards
from .team_likes import team_likes


class Team(db.Model):
  __tablename__ = 'teams'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(60), nullable = False, unique = True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False )
  league_id = db.Column(db.Integer, db.ForeignKey("leagues.id"), nullable = False)

  user = db.relationship("User", back_populates="teams")
  players = db.relationship("Player", secondary=player_cards)
  user_likes = db.relationship("User", secondary=team_likes)

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "user": self.user.to_dict(),
      "players": [player.to_dict() for player in self.players]
    }