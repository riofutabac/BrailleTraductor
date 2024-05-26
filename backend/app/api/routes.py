from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse
from app.services import translator
from app.services.pdf_generator import generate_pdf

router = APIRouter()

@router.get("/translate/{text}/{direction}")
async def translate(text: str, direction: str):
    if direction == "Braille":
        result = translator.tradBraille(text)
    elif direction == "Español":
        result = translator.tradEsp(text)
    else:
        raise HTTPException(status_code=400, detail="Invalid translation direction")
    return {"translated_text": result}

@router.get("/generate-pdf/{text}")
async def generate_pdf_route(text: str):
    filename = generate_pdf(text)
    return FileResponse(filename, media_type='application/pdf', filename=filename)