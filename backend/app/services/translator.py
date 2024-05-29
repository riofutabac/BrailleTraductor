import re

# Arreglos de caracteres ASCII y su correspondiente en Braille.
codascii = ['á','é','í','ó','ú','ü','\n',
            ' ','!','¡',"'",'#','+','-','*','/','"','(',')',
            '0','1','2','3','4','5','6','7','8','9',
            ':',';','.','=',',','?','¿','@',
            'a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q',
            'r','s','t','u','v','w','x','y','z','[',']','^','_']

brailles = ['⠷','⠮','⠌','⠬','⠾','⠳','\n',
            ' ','⠖','⠖','⠦','⠼','⠖','⠤','⠦','⠲',"⠦",'⠣','⠜',
            '⠚','⠁','⠃','⠉','⠙','⠑','⠋','⠛','⠓','⠊',
            '⠒','⠆','⠄','⠶','⠂','⠢','⠢','⠈',
            '⠁','⠃','⠉','⠙','⠑','⠋','⠛','⠓','⠊','⠚','⠅','⠇','⠍','⠝','⠻','⠕','⠏','⠟',
            '⠗','⠎','⠞','⠥','⠧','⠺','⠭','⠽','⠵','⠣','⠜','⠘','⠤']

# Diccionarios para mapear caracteres y Braille.
maindict = {codascii[i]: brailles[i] for i in range(len(codascii))}
secdict = {brailles[i]: codascii[i] for i in range(len(brailles))}

def control_mayusculas(entry):
    # Controlar el uso de mayúsculas en el texto para ajustar a Braille.
    modified = ""
    words = entry.split()
    for word in words:
        if word.isupper():
            # Si toda la palabra está en mayúsculas, agregar '⠨⠨' antes de ella.
            modified += '⠨⠨' + word + ' '
        elif word[0].isupper():
            # Si la primera letra de la palabra es mayúscula, agregar '⠨' antes de ella.
            modified += '⠨' + word + ' '
        else:
            modified += word + ' '
    return modified.strip()

def tradBraille(entry):
    entry = control_mayusculas(entry)  # Añadir marcas de mayúsculas antes de la traducción.
    texto = ""
    for char in entry:
        if char in maindict:
            texto += maindict[char]
        else:
            texto += char  # Mantener los caracteres no mapeados como están.
    return texto

def tradEsp(entry):
    texto = ""
    i = 0
    while i < len(entry):
        char = entry[i]
        if char == '⠨':
            if i + 1 < len(entry) and entry[i + 1] == '⠨':
                # Doble '⠨' indica mayúsculas para toda la palabra siguiente.
                i += 2
                while i < len(entry) and entry[i] != ' ':
                    if entry[i] in secdict:
                        texto += secdict[entry[i]].upper()
                    i += 1
                texto += ' '  # Agregar un espacio después de la palabra en mayúsculas.
            else:
                # Un solo '⠨' indica la siguiente letra en mayúscula.
                i += 1
                if i < len(entry) and entry[i] in secdict:
                    texto += secdict[entry[i]].capitalize()
        else:
            if char in secdict:
                texto += secdict[char]
            else:
                texto += char  # Mantener los caracteres no mapeados como están.
        i += 1
    return texto.strip()
