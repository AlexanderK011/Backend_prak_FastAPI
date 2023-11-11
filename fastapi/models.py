from sqlalchemy import MetaData, Column, Integer, String, ForeignKey, Table
from sqlalchemy.orm import relationship

from database import Base

metadata = MetaData()

Genres_Films = Table(
    "Genres_Films",
    Base.metadata,
    Column("genre_id", ForeignKey("genres.id"), primary_key=True),
    Column("films_id", ForeignKey("films.id"), primary_key=True),
)

class Genres(Base):
    __tablename__ = 'genres'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    films = relationship("Films", secondary=Genres_Films, back_populates="genres")

class Films(Base):
    __tablename__ = 'films'
    id = Column(Integer, primary_key = True, autoincrement = True)
    name = Column(String, nullable=False)
    description = Column(String, nullable = True)
    short_descr = Column(String)
    genres = relationship("Genres", secondary=Genres_Films, back_populates="films")

