# Backend_prak_FastAPI
1) Создание виртуальной среды: python -m venv venv
2) Зайти в виртуальную среду venv\Scripts\activate
3) Введите данные для авторизации базы данных в файле .env
4) Добавляем таблицы в базу данных: alembic upgrade head
5) Запускаем FastAPI: uvicorn main:app --reload
