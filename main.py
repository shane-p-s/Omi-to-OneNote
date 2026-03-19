from fastapi import FastAPI

app = FastAPI()

@app.get("/setup")
async def setup():
    return {"is_setup_completed": True}

@app.get("/")
async def home():
    return {"status": "Omi → OneNote integration is active"}
