from fastapi import FastAPI
from sqlalchemy.orm import load_only, joinedload

from database import db
from routers import films
from models import Films,Genres_Films, Genres

app=FastAPI()

app.include_router(films.filmsRouter)