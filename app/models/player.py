from .db import db
from .league_players import league_players
from .player_cards import player_cards

class Player(db.Model):
    __tablename__ = 'players'

    id = db.Column(db.Integer, primary_key = True, nullable = False)
    name = db.Column(db.String, nullable = False)
    position = db.Column(db.String, nullable=False)
    ppg = db.Column(db.Float, nullable = False)
    assists = db.Column(db.Float, nullable = False)
    rebounds = db.Column(db.Float, nullable = False)
    photo = db.Column(db.String)
    team_photo = db.Column(db.String)

    leagues = db.relationship("League", secondary=league_players, back_populates="players")
    teams = db.relationship("Team", secondary=player_cards)
    
    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "ppg": self.ppg,
            "assists": self.assists,
            "rebounds": self.rebounds,
            "photo": self.photo,
            "team_photo": self.team_photo
        }