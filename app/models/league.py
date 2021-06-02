from .db import db
from .user import User

league_members = db.Table(
    "league_members",
    db.Column("league_id", db.Integer, db.ForeignKey("leagues.id"))
), db.Column("user_id", db.Integer, db.ForeignKey("users.id"))


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

    