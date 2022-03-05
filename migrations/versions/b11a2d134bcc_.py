"""empty message

Revision ID: b11a2d134bcc
Revises: 80006e2c9880
Create Date: 2022-03-03 02:52:04.663688

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b11a2d134bcc'
down_revision = '80006e2c9880'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('project', 'baseprice',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=8),
               existing_nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('project', 'baseprice',
               existing_type=sa.Float(precision=8),
               type_=sa.REAL(),
               existing_nullable=True)
    # ### end Alembic commands ###