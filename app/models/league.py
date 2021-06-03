from .db import db
from .user import User
from .leaguemembers import league_members
from .player_cards import player_cards




class League(db.Model):
    __tablename__ = "leagues"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable=False)

    users_in = db.relationship("User",
    secondary=league_members, back_populates="leagues_in")
    
    # code below:
    # players is a collection of objects of type Player using the
    #player_cards join table to find only the players who are matched up
    # with League's instance id

    players = db.relationship("Player", secondary=player_cards)

    teams = db.relationship("Team", secondary=player_cards)

    def to_dict(self):
        return {
        "id": self.id,
        "name": self.name
        # [player.to_dict for player in self.players]
        }

    