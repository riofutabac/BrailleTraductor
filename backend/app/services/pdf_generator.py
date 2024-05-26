from PIL import Image, ImageDraw, ImageFont
import os

def create_image_from_text(text):
    # Crear una imagen en blanco
    image = Image.new('RGB', (800, 600), color='white')
    draw = ImageDraw.Draw(image)
    
    # Configurar la ruta absoluta de la fuente
    font_path = os.path.join(os.path.dirname(__file__), 'fonts', 'DejaVuSansCondensed.ttf')
    
    # Cargar la fuente Braille
    font = ImageFont.truetype(font_path, size=36)
    
    # Dibujar el texto en la imagen
    draw.text((10, 10), text, font=font, fill='black')
    
    # Aplicar efecto espejo
    image = image.transpose(Image.FLIP_LEFT_RIGHT)
    
    # Guardar la imagen temporalmente
    image_path = 'text_image.png'
    image.save(image_path)
    
    return image_path

def convert_image_to_pdf(image_path):
    image = Image.open(image_path)
    pdf_path = image_path.replace('.png', '.pdf')
    image.save(pdf_path, 'PDF', resolution=100.0)
    return pdf_path