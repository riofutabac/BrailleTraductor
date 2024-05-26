from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph
from reportlab.lib.styles import getSampleStyleSheet
import os

def generate_pdf(text, filename='Traduccion_Braille.pdf'):
    styles = getSampleStyleSheet()

    doc = SimpleDocTemplate(filename, pagesize=letter)
    elements = []

    lines = text.split('\n')

    for line in lines:
        elements.append(Paragraph(line, styles['BodyText']))

    doc.build(elements)

    return filename
