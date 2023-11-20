from fastapi import APIRouter
from sqlalchemy.orm import joinedload

from models import Films, Genres

from database import db
from schemas import FilmCreate
from fastapi import  HTTPException, status

filmsRouter = APIRouter(prefix="",
    tags=["FilmsController"],
    responses={404: {"description": "Not found"}})

@filmsRouter.get('/')
async def index():
    films = db.query(Films).all()
    return films

@filmsRouter.post('/newfilm/',response_model=FilmCreate)
async def addfilm(film : FilmCreate):
    film = Films(
        name = film.name,
        description = film.description,
        short_descr = film.short_descr,
        year_cr = film.year_cr
    )
    try:
        db.add(film)
        db.commit()
    except:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail='Try again'
        )
    return film

@filmsRouter.get('/genres/{genre_id}/')
async def catFilms(genre_id : int):
    genrfilms = db.query(Genres).options(joinedload(Genres.films)).where(Genres.id == genre_id).one()
    return {'films':genrfilms.films,'genre':genrfilms.name}

@filmsRouter.get('/film/{id}')
async def filmInfo(id:int):
    film = db.query(Films).filter(Films.id == id).options(joinedload(Films.genres).load_only(Genres.name)).where(Films.id == id).one()
    return {'name':film.name,'description':film.description,'genres':film.genres}

@filmsRouter.get('/genres')
async def genres():
    genres = db.query(Genres).all()
    return genres

