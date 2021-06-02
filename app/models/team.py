from .db import db
from .user import User
from .league import League


class Team(db.Model):
  __tablename__ = 'teams'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(60), nullable = False, unique = True)
  user_id = db.Column(db.Integer, db.ForeignKey(User.id), nullable = False )
  league_id = db.Column(db.Integer, db.ForeignKey(League.id), nullable = False)

  user = db.relationship("User", back_populates="teams")

  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email
    }