from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI()

@app.get("/setup")
async def setup():
    return JSONResponse(content={"is_setup_completed": True}, status_code=200)

@app.get("/")
async def home():
    return JSONResponse(content={"status": "Omi → OneNote integration is active"}, status_code=200)
