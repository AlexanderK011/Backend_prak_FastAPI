from fastapi import APIRouter

from models import News,CategoryNews,Comments

from database import db

from schemas import CommentCreate

from fastapi import  HTTPException, status

newsRouter = APIRouter(prefix="",
    tags=["newsController"],
    responses={404: {"description": "Not found"}})

@newsRouter.get('/news')
async def news():
    return db.query(News).all()

@newsRouter.get('/news/{id}')
async def onenew(id : int):
    onenew = db.query(News).filter(News.id == id).first()
    return onenew

@newsRouter.get('/news/cats/')
async def new_cats():
    return db.query(CategoryNews).all()

@newsRouter.get('/cat/new/{cat_id}')
async def newsincat(cat_id):
    new = db.query(News).filter(News.cat_id == cat_id).all()
    return new

@newsRouter.get('/getcomments/{new_id}')
async def comments(new_id : int):
    comms = db.query(Comments).filter(Comments.new_id == new_id).all()
    return comms

@newsRouter.post('/commentcreate', response_model=CommentCreate)
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