"""added attributes on dependent classes

Revision ID: fcf59e292e57
Revises: 58c8b42bd620
Create Date: 2021-06-02 18:41:14.707790

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fcf59e292e57'
down_revision = '58c8b42bd620'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('league_members', sa.Column('user_id', sa.Integer(), nullable=False))
    op.create_foreign_key(None, 'league_members', 'users', ['user_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'league_members', type_='foreignkey')
    op.drop_column('league_members', 'user_id')
    # ### end Alembic commands ###