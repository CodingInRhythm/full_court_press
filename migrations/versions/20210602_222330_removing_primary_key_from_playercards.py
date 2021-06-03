"""removing primary key from playercards

Revision ID: a90071148427
Revises: 101bd7d15e89
Create Date: 2021-06-02 22:23:30.365748

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a90071148427'
down_revision = '101bd7d15e89'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('player_cards', 'league_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('player_cards', 'player_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('player_cards', 'team_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('player_cards', 'team_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('player_cards', 'player_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('player_cards', 'league_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###