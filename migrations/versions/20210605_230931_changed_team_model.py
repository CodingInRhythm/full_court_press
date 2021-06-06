"""changed team model

Revision ID: 97ef14f1e7fc
Revises: 2688e76d561b
Create Date: 2021-06-05 23:09:31.021196

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '97ef14f1e7fc'
down_revision = '2688e76d561b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint('unique_team_owners', 'teams', ['user_id', 'league_id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('unique_team_owners', 'teams', type_='unique')
    # ### end Alembic commands ###
