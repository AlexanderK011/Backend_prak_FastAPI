from pydantic import BaseModel

class FilmCreate(BaseModel):
    name :str
    description :str
    short_descr :str