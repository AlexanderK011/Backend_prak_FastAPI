from datetime import date

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