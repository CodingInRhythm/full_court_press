from .db import db
user_player_cards = db.Table(
  "user_player_cards", # table name in DB
  db.Column(
    "user_id", # column name in db
    db.Integer, # datatype
    db.ForeignKey("users.id"), # association
    primary_key=True # configures some SQLalchemy magic
  ),
  db.Column(
    "player_id",
    db.Integer,
    db.ForeignKey("players.id"),
    primary_key=True
  ),
  db.Column(
    "league_id",
    db.Integer,
    db.ForeignKey("leagues.id"),
    primary_key=True
  ),
  db.Column(
    "team_id",
    db.Integer,
    db.ForeignKey("teams.id"),
    primary_key=True
  )
)
db.Index(
  "unique_player_leauge",
  user_player_cards.c.player_id,
  user_player_cards.c.league_id,
  unique=True
)