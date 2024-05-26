import os
import pytest
from app.services.pdf_generator import create_image_from_text, convert_image_to_pdf

def test_create_image_from_text():
    text = "⠓⠕⠇⠁"
    image_path = create_image_from_text(text)
    
    assert os.path.exists(image_path)
    assert image_path.endswith('.png')



def test_convert_image_to_pdf():
    text = "⠓⠕⠇⠁"
    image_path = create_image_from_text(text)
    pdf_path = convert_image_to_pdf(image_path)
    
    assert os.path.exists(pdf_path)
    assert pdf_path.endswith('.pdf')
    

