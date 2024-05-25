# Ejemplo de modelo usando Pydantic, útil si vas a usar una base de datos
from pydantic import BaseModel

class Translation(BaseModel):
    id: int
    original_text: str
    translated_text: str
