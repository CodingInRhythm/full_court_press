from .db import db

player_cards = db.Table(
    "player_cards",
    db.Column(
        "league_id", db.Integer, db.ForeignKey("leagues.id")
    ), 
    # db.Column(
    #     "user_id", db.Integer, db.ForeignKey("users.id"), primary_key=True
    # ),
    db.Column(
        "player_id", db.Integer, db.ForeignKey("players.id")
    ),
    db.Column(
        "team_id", db.Integer, db.ForeignKey("teams.id")
    )
)