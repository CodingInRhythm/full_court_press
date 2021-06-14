"""added league owners to db

Revision ID: b598e6451c09
Revises: 91eb79f85db9
Create Date: 2021-06-13 18:03:25.826762

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b598e6451c09'
down_revision = '91eb79f85db9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('leagues', sa.Column('owner_id', sa.Integer(), nullable=False))
    op.create_foreign_key(None, 'leagues', 'users', ['owner_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'leagues', type_='foreignkey')
    op.drop_column('leagues', 'owner_id')
    # ### end Alembic commands ###