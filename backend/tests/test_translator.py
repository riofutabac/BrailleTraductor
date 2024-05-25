import pytest
from app.services import translator

def test_tradBraille():
    assert translator.tradBraille("hola") == "⠓⠕⠇⠁"

def test_tradEsp():
    assert translator.tradEsp("⠓⠕⠇⠁") == "hola"
