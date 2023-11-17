from fastapi import APIRouter
from sqlalchemy.orm import joinedload

from models import Films, Genres,News,CategoryNews,Comments

from database import db

from schemas import FilmCreate, CommentCreate

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
        short_descr = film.short_descr
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

@filmsRouter.get('/news')
async def news():
    return db.query(News).all()

@filmsRouter.get('/news/{id}')
async def onenew(id : int):
    onenew = db.query(News).filter(News.id == id).first()
    return onenew

@filmsRouter.get('/news/cats/')
async def new_cats():
    return db.query(CategoryNews).all()

@filmsRouter.get('/cat/new/{cat_id}')
async def newsincat(cat_id):
    new = db.query(News).filter(News.cat_id == cat_id).all()
    return new

@filmsRouter.get('/getcomments/{new_id}')
async def comments(new_id : int):
    comms = db.query(Comments).filter(Comments.new_id == new_id).all()
    return comms

@filmsRouter.post('/commentcreate', response_model=CommentCreate)
async def commcreate(comment:CommentCreate):
    comment = Comments(
        nameuser=comment.nameuser,
        message=comment.message,
        new_id=comment.new_id
    )
    try:
        db.add(comment)
        db.commit()
    except:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail='Try again'
        )
    return comment