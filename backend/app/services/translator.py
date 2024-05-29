import re

# Arreglos de caracteres ASCII y su correspondiente en Braille.
codascii = ['á', 'é', 'í', 'ó', 'ú', 'ü', '\n',
            ' ', '!', '¡', "'", '#', '+', '-', '*', '/', '"', '(', ')',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            ':', ';', '.', '=', ',', '?', '¿', '@',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q',
            'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '[', ']', '^', '_']

brailles = ['⠷', '⠮', '⠌', '⠬', '⠾', '⠳', '\n',
            ' ', '⠖', '⠖', '⠦', '⠼', '⠖', '⠤', '⠦', '⠲', "⠦", '⠣', '⠜',
            '⠚', '⠁', '⠃', '⠉', '⠙', '⠑', '⠋', '⠛', '⠓', '⠊',
            '⠒', '⠆', '⠄', '⠶', '⠂', '⠢', '⠢', '⠈',
            '⠁', '⠃', '⠉', '⠙', '⠑', '⠋', '⠛', '⠓', '⠊', '⠚', '⠅', '⠇', '⠍', '⠝', '⠻', '⠕', '⠏', '⠟',
            '⠗', '⠎', '⠞', '⠥', '⠧', '⠺', '⠭', '⠽', '⠵', '⠣', '⠜', '⠘', '⠤']

# Diccionarios para mapear caracteres y Braille.
maindict = {codascii[i]: brailles[i] for i in range(len(codascii))}
secdict = {brailles[i]: codascii[i] for i in range(len(brailles))}

def control_mayusculas_y_numeros(entry):
    modified = ""
    i = 0
    while i < len(entry):
        char = entry[i]
        if char.isdigit():
            if i == 0 or not entry[i-1].isdigit():
                # Iniciar una nueva secuencia numérica
                modified += '⠼'
            modified += maindict[char]
        elif char.isupper():
            if i == 0 or not entry[i-1].isupper() or entry[i-1] in ' .,;:':
                # Iniciar una nueva secuencia de mayúsculas
                if i + 1 < len(entry) and entry[i+1].isupper() and entry[i+1] not in ' .,;:':
                    modified += '⠨⠨'  # Comienzo de palabras totalmente en mayúsculas
                else:
                    modified += '⠨'  # Comienzo de una palabra con inicial mayúscula
            modified += maindict[char.lower()]
        else:
            modified += maindict.get(char, char)  # Caracteres no alfabéticos o en minúsculas
        i += 1
    return modified

def tradBraille(entry):
    entry = control_mayusculas_y_numeros(entry)  # Preprocesar mayúsculas y números.
    return entry

def tradEsp(entry):
    texto = ""
    i = 0
    while i < len(entry):
        char = entry[i]
        if char == '⠨':
            if i + 1 < len(entry) and entry[i+1] == '⠨':
                i += 2
                while i < len(entry) and entry[i] not in ' .,;:':
                    if entry[i] in secdict:
                        texto += secdict[entry[i]].upper()
                    i += 1
                i -= 1  # Compensar el incremento del ciclo principal
            else:
                i += 1
                if i < len(entry) and entry[i] in secdict:
                    texto += secdict[entry[i]].upper()
        elif char == '⠼':
            i += 1
            while i < len(entry) and entry[i] in secdict and entry[i].isdigit():
                texto += secdict[entry[i]]
                i += 1
            i -= 1  # Compensar el incremento del ciclo principal
        elif char in secdict:
            texto += secdict[char]
        else:
            texto += char
        i += 1
    return texto.strip()