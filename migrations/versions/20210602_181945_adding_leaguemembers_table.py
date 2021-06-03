"""adding leaguemembers table

Revision ID: 58c8b42bd620
Revises: 2d72b650a8ce
Create Date: 2021-06-02 18:19:45.739986

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '58c8b42bd620'
down_revision = '2d72b650a8ce'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('league_members',
    sa.Column('league_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['league_id'], ['leagues.id'], )
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('league_members')
    # ### end Alembic commands ###
