import pytest
from app.services import translator

def test_tradBraille():
    """
    Prueba unitaria para la función tradBraille.
    """
    assert translator.tradBraille("hola") == "⠓⠕⠇⠁"

def test_tradEsp():
    """
    Prueba unitaria para la función tradEsp.
    """
    assert translator.tradEsp("⠓⠕⠇⠁") == "hola"