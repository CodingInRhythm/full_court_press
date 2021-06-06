from .db import db

league_members = db.Table(
    "league_members",
    db.Column(
        "league_id", db.Integer, db.ForeignKey("leagues.id"), primary_key=True
    ), 
    db.Column(
        "user_id", db.Integer, db.ForeignKey("users.id"), primary_key=True
    )
)

db.Index(
    "unique_user_league",
    league_members.c.user_id,
    league_members.c.league_id,
    unique=True
)