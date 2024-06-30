import re
"""
Arreglos de caracteres ASCII y su correspondiente en Braille.
"""
codascii = ['á', 'é', 'í', 'ó', 'ú', 'ü', '\n',
            ' ', '!', '¡', "'", '#', '+', '-', '*', '÷', '"', '(', ')',
            ':', ';', '.', '=', ',', '?', '¿', '@',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q',
            'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '[', ']', '^', '_']

brailles = ['⠷', '⠮', '⠌', '⠬', '⠾', '⠳', '\n',
            ' ', '⠖', '⠖', '⠦', '⠼', '⠖', '⠤', '⠦', '⠲', "⠦", '⠣', '⠜',
            '⠒', '⠆', '⠄', '⠶', '⠂', '⠢', '⠢', '⠈',
            '⠁', '⠃', '⠉', '⠙', '⠑', '⠋', '⠛', '⠓', '⠊', '⠚', '⠅', '⠇', '⠍', '⠝', '⠻', '⠕', '⠏', '⠟',
            '⠗', '⠎', '⠞', '⠥', '⠧', '⠺', '⠭', '⠽', '⠵', '⠣', '⠜', '⠘', '⠤']

"""
# Diccionarios para mapear caracteres y Braille.
"""

maindict = {codascii[i]: brailles[i] for i in range(len(codascii))}
secdict = {brailles[i]: codascii[i] for i in range(len(brailles))}

"""
# Diccionarios de conversión numérica
"""
numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
braille = ['⠚', '⠁', '⠃', '⠉', '⠙', '⠑', '⠋', '⠛', '⠓', '⠊']
numdict = {numeros[i]: braille[i] for i in range(len(numeros))}
brailledict = {braille[i]: numeros[i] for i in range(len(braille))}

def control_mayusculas_y_numeros(entry):
    """
    Controla la conversión de mayúsculas y números en la entrada de texto.

    @param entry: El texto de entrada a procesar.
    @return: El texto modificado con los controles de mayúsculas y números aplicados.
    """
    modified = ""
    i = 0
    last_was_space = True
    last_was_number = False
    while i < len(entry):
        char = entry[i]
        if char.isdigit():
            if last_was_space or not last_was_number:
            
                modified += '⠼'
            modified += numdict[char]
            last_was_number = True
        elif char in '.,':
        
            if last_was_number:
                if char == '.':
                    modified += '⠄'
                elif char == ',':
                    modified += '⠂'
            else:
                if char == '.':
                    modified += '⠄'
                elif char == ',':
                    modified += '⠂'
        elif char.isupper():
            if last_was_space:
                
                if i + 1 < len(entry) and entry[i+1].isupper() and entry[i+1] not in ' .,;:':
                    modified += '⠨⠨' 
                else:
                    modified += '⠨'  
            modified += maindict[char.lower()]
            last_was_number = False
        else:
            modified += maindict.get(char, char)  
            last_was_number = False
        last_was_space = char in ' ;:'
        i += 1
    return modified

def tradBraille(entry):
    """
    Traduce un texto en español a Braille.

    @param entry: El texto en español a traducir.
    @return: El texto traducido a Braille.
    """
    entry = control_mayusculas_y_numeros(entry)  
    return entry

def tradEsp(entry):
    """
    Traduce un texto en Braille a español.

    @param entry: El texto en Braille a traducir.
    @return: El texto traducido a español.
    """
    texto = ""
    i = 0
    while i < len(entry):
        char = entry[i]
        if char == '⠨':
            i += 1
            if i < len(entry) and entry[i] == '⠨':
                i += 1
                while i < len(entry) and entry[i] not in ' .,;:':
                    if entry[i] in secdict:
                        texto += secdict[entry[i]].upper()
                    i += 1
                i -= 1
            elif i < len(entry) and entry[i] in secdict:
                texto += secdict[entry[i]].upper()
        elif char == '⠼':
            i += 1
            while i < len(entry) and (entry[i] in brailledict or entry[i] in '⠄⠂'):
                if entry[i] == '⠄':
                    texto += '.'
                elif entry[i] == '⠂':
                    texto += ','
                elif entry[i] in brailledict:
                    texto += brailledict[entry[i]]
                i += 1
            i -= 1
        elif char in secdict:
            texto += secdict[char]
        else:
            texto += char
        i += 1
    return texto.strip()

