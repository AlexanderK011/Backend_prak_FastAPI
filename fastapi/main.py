from fastapi import FastAPI
from sqlalchemy.orm import load_only, joinedload
from starlette.middleware.cors import CORSMiddleware

from database import db
from routers import films
from models import Films,Genres_Films, Genres

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(films.filmsRouter)