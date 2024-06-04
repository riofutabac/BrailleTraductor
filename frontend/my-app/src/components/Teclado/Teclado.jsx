import React, { useState } from 'react';
import './Teclado.css';

const charToBrailleMap = {
  'á': '⠷', 'é': '⠮', 'í': '⠌', 'ó': '⠬', 'ú': '⠾', 'ü': '⠳', '⭡_mayús': '⠨',
  '¡!': '⠖', "'": '⠦', '#': '⠼', '+': '⠖', '-': '⠤', '*': '⠦', '÷': '⠲',
  '"': '⠦', '(': '⠣', ')': '⠜', ': ': '⠒', ';': '⠆', '.': '⠄', '=': '⠶', ',': '⠂', '¿?': '⠢', '@': '⠈',
  'a': '⠁', 'b': '⠃', 'c': '⠉', 'd': '⠙', 'e': '⠑', 'f': '⠋', 'g': '⠛', 'h': '⠓', 'i': '⠊', 'j': '⠚',
  'k': '⠅', 'l': '⠇', 'm': '⠍', 'n': '⠝', 'ñ': '⠻', 'o': '⠕', 'p': '⠏', 'q': '⠟', 'r': '⠗', 's': '⠎',
  't': '⠞', 'u': '⠥', 'v': '⠧', 'w': '⠺', 'x': '⠭', 'y': '⠽', 'z': '⠵', '[': '⠣', ']': '⠜', '^': '⠘', '_': '⠤',
  '0': '⠚', '1': '⠁', '2': '⠃', '3': '⠉', '4': '⠙', '5': '⠑', '6': '⠋', '7': '⠛', '8': '⠓', '9': '⠊'
};

export const Teclado = ({ setInputText, inputText }) => {
  const [inNumberSequence, setInNumberSequence] = useState(false);

  const keys = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ'],
    ['⭡_mayús', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'borrar'],
    ['(', ')', ':', ';', '.', ',', 'espacio', 'enter'],
    ['á', 'é', 'í', 'ó', 'ú', 'ü', '+', '-', '÷', '*'],
    ['¡!', '@', '^', '"', "'", '¿?', '_', '=']
  ];

  const handleKeyPress = (key) => {
    let updatedText = inputText;

    if (key === 'borrar') {
      setInputText(inputText.slice(0, -1));
      setInNumberSequence(false);
      return;
    } else if (key === 'espacio') {
      updatedText += ' ';
      setInNumberSequence(false); // end number sequence on space
    } else if (key === 'enter') {
      updatedText += '\n';
      setInNumberSequence(false); // end number sequence on enter
    } else {
      if (charToBrailleMap[key.toLowerCase()]) {
        if (key.match(/[0-9]/)) { // if the key is a number
          if (!inNumberSequence || inputText.endsWith(' ')) {
            updatedText += '⠼';
            setInNumberSequence(true);
          }
          updatedText += charToBrailleMap[key.toLowerCase()];
        } else {
          updatedText += charToBrailleMap[key.toLowerCase()];
          setInNumberSequence(false); // end number sequence on non-number
        }
      } else {
        updatedText += key;
        setInNumberSequence(false); // end number sequence on non-braille char
      }
    }
    setInputText(updatedText);
  };

  return (
    <div className='contenedorTeclado'>
      <div className="keyboard">
        {keys.map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row">
            {row.map((key) => (
              <button key={key} className="key" onClick={() => handleKeyPress(key)}>
                <div className="braille-symbol">
                  {key.match(/[0-9]/) ? '⠼' + charToBrailleMap[key.toLowerCase()] : charToBrailleMap[key.toLowerCase()] || key}
                </div>
                <div className="ascii-symbol">{key}</div>
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teclado;
