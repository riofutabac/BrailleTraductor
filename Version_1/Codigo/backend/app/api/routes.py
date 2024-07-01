from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse
from app.services import translator
from app.services.pdf_generator import create_image_from_text, convert_image_to_pdf

router = APIRouter()

@router.get("/translate/{text}/{direction}")
async def translate(text: str, direction: str):
    """
    Traduce el texto dado en la dirección especificada.

    @param text: El texto a traducir.
    @param direction: La dirección de traducción ("Braille" o "Español").
    @return: Un diccionario con el texto traducido.
    @throws HTTPException: Si la dirección de traducción es inválida.
    """
    if direction == "Braille":
        result = translator.tradBraille(text)
    elif direction == "Español":
        result = translator.tradEsp(text)
    else:
        raise HTTPException(status_code=400, detail="Invalid translation direction")
    return {"translated_text": result}

@router.get("/generate-pdf/{text}")
async def generate_pdf_route(text: str):
    """
    Genera un PDF a partir del texto dado.

    @param text: El texto para generar el PDF.
    @return: Un FileResponse con el PDF generado.
    """
    image_path = create_image_from_text(text)
    pdf_path = convert_image_to_pdf(image_path)
    return FileResponse(pdf_path, media_type='application/pdf', filename=pdf_path)

@router.get("/generate-image/{text}")
async def generate_img_route(text: str):
    """
    Genera una imagen a partir del texto dado.

    @param text: El texto para generar la imagen.
    @return: Un FileResponse con la imagen generada.
    """
    image_path = create_image_from_text(text)
    return FileResponse(image_path, media_type='image/png', filename=image_path)