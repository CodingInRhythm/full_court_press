from .db import db

player_cards = db.Table(
    "player_cards",
    # db.Column(
    #     "league_id", db.Integer, db.ForeignKey("leagues.id"), primary_key = True
    # ), 
    # db.Column(
    #     "user_id", db.Integer, db.ForeignKey("users.id"), primary_key=True
    # ),
    db.Column(
        "player_id", db.Integer, db.ForeignKey("players.id"), primary_key = True
    ),
    db.Column(
        "team_id", db.Integer, db.ForeignKey("teams.id"), primary_key = True
    )
)

# db.Index(
#     "unique_player_league",
#     player_cards.c.player_id,
#     player_cards.c.league_id,
#     unique=True
# )