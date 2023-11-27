from datetime import date
from typing import List

from pydantic import BaseModel

class FilmCreate(BaseModel):
    name :str
    description :str
    short_descr :str
    year_cr: date

class CommentCreate(BaseModel):
    nameuser:str
    message:str
    new_id:int


class Genre(BaseModel):
    id: int
    name: str

class Film(BaseModel):
    name: str
    year_cr: date
    description: str
    genres: List[Genre]


class Film_n2(BaseModel):
    name: str
    description: str
    year_cr: date
    id:int
    short_descr: str

class Genre_n2(BaseModel):
    films: List[Film_n2]
    genre_id: int
