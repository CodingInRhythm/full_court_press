from .db import db

league_members = db.Table(
    "league_members",
    db.Column("league_id", db.Integer, db.ForeignKey("leagues.id"))
), db.Column("user_id", db.Integer, db.ForeignKey("users.id"))
