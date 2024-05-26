codascii = ['á','é','í','ó','ú','ü','\n','...',
        ' ','!','¡',"'",'#','$','%','&','"','(',')','*',',','-','.','/',
          '0','1','2','3','4','5','6','7','8','9',
          ':',';','<','=','>','?','¿','@',
          'a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q',
          'r','s','t','u','v','w','x','y','z','[',']','^','_']

brailles = ['⠷','⠮','⠌','⠬','⠾','⠳','\n',' ',
        ' ','⠖','⠖','⠦','⠼','⠸⠎','⠸⠴','⠠⠯',"⠦",'⠣','⠜','⠔','⠂','⠤','⠄','⠠⠂',
        '⠼⠚','⠼⠁','⠼⠃','⠼⠉','⠼⠲','⠼⠑','⠼⠋','⠼⠛','⠼⠓','⠼⠊',
        '⠱','⠰','⠣','⠿','⠜','⠢','⠢','⠈','⠁','⠃','⠉','⠙','⠑','⠋','⠛','⠓','⠊','⠚','⠅',
        '⠇','⠍','⠝','⠻','⠕','⠏','⠟','⠗','⠎','⠞','⠥','⠧','⠺','⠭','⠽','⠵','⠣','⠜','⠘','⠸']

maindict = {codascii[i]: brailles[i] for i in range(len(codascii))}
secdict = {brailles[i]: codascii[i] for i in range(len(brailles))}

def tradBraille(entry):
    texto = ""
    for char in entry:
        char = char.lower()
        if char in maindict:
            texto += maindict[char]
    return texto

def tradEsp(entry):
    texto = ""
    for char in entry:
        if char in secdict:
            texto += secdict[char]
    return texto
