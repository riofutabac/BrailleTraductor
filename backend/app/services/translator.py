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
    last_was_space = True  # Para manejar el inicio de texto o después de un espacio.
    
    for i, char in enumerate(entry):
        if char.isdigit():
            if last_was_space or (i > 0 and not entry[i-1].isdigit()):
                # Si es el comienzo de un número nuevo.
                modified += '⠼'
            modified += maindict[char]
            last_was_space = False
        elif char.isupper():
            if last_was_space:
                # Si es el comienzo de una palabra con mayúscula.
                modified += '⠨'
            modified += maindict[char.lower()]
            last_was_space = False
        else:
            modified += maindict.get(char, char)  # Mantener los caracteres no mapeados.
            last_was_space = char == ' '
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
            i += 1
            if i < len(entry) and entry[i] in secdict:
                texto += secdict[entry[i]].upper()
        elif char == '⠼':
            # Saltar el símbolo de número y continuar con los números.
            i += 1
            while i < len(entry) and entry[i] in secdict and entry[i].isdigit():
                texto += secdict[entry[i]]
                i += 1
            i -= 1  # Ajuste porque el ciclo principal también incrementará `i`.
        elif char in secdict:
            texto += secdict[char]
        else:
            texto += char
        i += 1
    return texto.strip()