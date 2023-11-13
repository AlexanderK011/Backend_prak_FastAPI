"""'1tomanyv3'

Revision ID: 717dd6c47f1b
Revises: 6d31e90bf38a
Create Date: 2023-11-11 14:18:39.770425

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '717dd6c47f1b'
down_revision: Union[str, None] = '6d31e90bf38a'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Genres_Films',
    sa.Column('genre_id', sa.Integer(), nullable=False),
    sa.Column('films_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['films_id'], ['films.id'], ),
    sa.ForeignKeyConstraint(['genre_id'], ['genres.id'], ),
    sa.PrimaryKeyConstraint('genre_id', 'films_id')
    )
    op.drop_table('genre_films')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('genre_films',
    sa.Column('genre_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('films_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['films_id'], ['films.id'], name='genre_films_films_id_fkey'),
    sa.ForeignKeyConstraint(['genre_id'], ['genres.id'], name='genre_films_genre_id_fkey'),
    sa.PrimaryKeyConstraint('genre_id', 'films_id', name='genre_films_pkey')
    )
    op.drop_table('Genres_Films')
    # ### end Alembic commands ###