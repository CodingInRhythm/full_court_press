from .db import db

league_players = db.Table(
    "league_players",
    db.Column(
        "league_id", db.Integer, db.ForeignKey("leagues.id"), primary_key=True
    ), 
    db.Column(
        "player_id", db.Integer, db.ForeignKey("players.id"), primary_key=True
    )
)

db.Index(
    "unique_player_league",
    league_players.c.player_id,
    league_players.c.league_id,
    unique=True
)