import uvicorn
from fastapi import FastAPI
from app.api import routes

app = FastAPI()

app.include_router(routes.router, prefix="/api")

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)
