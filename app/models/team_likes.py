from .db import db

team_likes = db.Table(
    "team_likes",
    db.Column(
        "user_id", db.Integer, db.ForeignKey("users.id")
    ),
    db.Column(
        "team_id", db.Integer, db.ForeignKey("teams.id")
    )
)