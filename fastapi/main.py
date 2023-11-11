from fastapi import FastAPI
from sqlalchemy.orm import load_only, joinedload

from database import db
from models import Films,Genres_Films, Genres

app=FastAPI()

@app.get('/')
async def index():
    films = db.query(Films).all()
    return films

@app.get('/genres/{genre_id}/')
async def catFilms(genre_id : int):
    genrfilms = db.query(Genres).options(joinedload(Genres.films)).where(Genres.id == genre_id).one()
    return {'films':genrfilms.films,'genre':genrfilms.name}

@app.get('/film/{id}')
async def filmInfo(id:int):
    film = db.query(Films).filter(Films.id == id).options(joinedload(Films.genres).load_only(Genres.name)).where(Films.id == id).one()
    return {'name':film.name,'description':film.description,'genres':film.genres}

@app.get('/genres')
async def genres():
    genres = db.query(Genres).all()
    return genres
