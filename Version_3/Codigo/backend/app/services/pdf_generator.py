from PIL import Image, ImageDraw, ImageFont
import os

def create_image_from_text(text):
    """
    Crea una imagen a partir del texto dado.

    @param text: El texto para generar la imagen.
    @return: La ruta de la imagen generada.
    """
    
    image = Image.new('RGB', (800, 600), color='white')
    draw = ImageDraw.Draw(image)
    
    
    font_path = os.path.join(os.path.dirname(__file__), 'fonts', 'DejaVuSansCondensed.ttf')
    
    
    font = ImageFont.truetype(font_path, size=36)
    
    draw.text((10, 10), text, font=font, fill='black')
    
    image_path = 'text_image.png'
    image.save(image_path)
    
    return image_path

def convert_image_to_pdf(image_path):
    """
    Convierte una imagen a un archivo PDF.

    @param image_path: La ruta de la imagen a convertir.
    @return: La ruta del archivo PDF generado.
    """
    image = Image.open(image_path)
    image = image.transpose(Image.FLIP_LEFT_RIGHT)
    pdf_path = image_path.replace('.png', '.pdf')
    image.save(pdf_path, 'PDF', resolution=100.0)
    return pdf_path
