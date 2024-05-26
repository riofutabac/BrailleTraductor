from fastapi import APIRouter, HTTPException
from app.services import translator

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
