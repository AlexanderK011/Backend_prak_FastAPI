from sqlalchemy import MetaData, Column, Integer, String, ForeignKey, Table,Date
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
    year_cr = Column(Date)
    genres = relationship("Genres", secondary=Genres_Films, back_populates="films")

class CategoryNews(Base):
    __tablename__ = 'categorynews'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)


class News(Base):
    __tablename__ = 'news'
    id = Column(Integer, primary_key = True, autoincrement = True)
    name = Column(String,nullable=False)
    description = Column(String)
    cat_id = Column(ForeignKey('categorynews.id'))

class Comments(Base):
    __tablename__ = 'comments'
    id = Column(Integer, primary_key=True, autoincrement=True)
    nameuser = Column(String, nullable=False)
    message = Column(String)
    new_id = Column(ForeignKey('news.id'))
