from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse
from app.services import translator
from app.services.pdf_generator import create_image_from_text, convert_image_to_pdf

router = APIRouter()

@router.get("/translate/{text}/{direction}")
async def translate(text: str, direction: str):
    if direction == "Braille": #Poner Braille
        result = translator.tradBraille(text)
    elif direction == "Español": #Poner Español
        result = translator.tradEsp(text)
    else:
        raise HTTPException(status_code=400, detail="Invalid translation direction")
    return {"translated_text": result}

@router.get("/generate-pdf/{text}")
async def generate_pdf_route(text: str):
    image_path = create_image_from_text(text)
    pdf_path = convert_image_to_pdf(image_path)
    return FileResponse(pdf_path, media_type='application/pdf', filename=pdf_path)
