from .db import db
from .user import User
from .leaguemembers import league_members




class League(db.Model):
    __tablename__ = "leagues"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable=False)

    users_in = db.relationship("User",
    secondary=league_members)
    
    def to_dict(self):
        return {
        "id": self.id,
        "name": self.name
        }

    