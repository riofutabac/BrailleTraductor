import React from 'react';
import './Teclado.css';

// Diccionario de mapeo de caracteres ASCII a Braille
const charToBrailleMap = {
  'á': '⠷', 'é': '⠮', 'í': '⠌', 'ó': '⠬', 'ú': '⠾', 'ü': '⠳', '⭡_mayús': '⠨',
  '¡!': '⠖', "'": '⠦', '#': '⠼', '+': '⠖', '-': '⠤', '*': '⠦', '÷': '⠲',
  '"': '⠦', '(': '⠣', ')': '⠜', ':': '⠒', ';': '⠆', '.': '⠄', '=': '⠶', ',': '⠂', '¿?': '⠢', '@': '⠈',
  'a': '⠁', 'b': '⠃', 'c': '⠉', 'd': '⠙', 'e': '⠑', 'f': '⠋', 'g': '⠛', 'h': '⠓', 'i': '⠊', 'j': '⠚',
  'k': '⠅', 'l': '⠇', 'm': '⠍', 'n': '⠝', 'ñ': '⠻', 'o': '⠕', 'p': '⠏', 'q': '⠟', 'r': '⠗', 's': '⠎',
  't': '⠞', 'u': '⠥', 'v': '⠧', 'w': '⠺', 'x': '⠭', 'y': '⠽', 'z': '⠵', '[': '⠣', ']': '⠜', '^': '⠘', '_': '⠤',
  '0': '⠚', '1': '⠁', '2': '⠃', '3': '⠉', '4': '⠙', '5': '⠑', '6': '⠋', '7': '⠛', '8': '⠓', '9': '⠊'
};

export const Teclado = () => {
  const keys = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ'],
    ['⭡_mayús','z', 'x', 'c', 'v', 'b', 'n', 'm', 'borrar'],
    ['(', ')',':', ';', '.',',','espacio', 'enter'],
    ['á', 'é', 'í', 'ó', 'ú', 'ü', '+', '-', '÷', '*'],
    ['¡!', '@', '#', '^', '"', "'", '¿?', '_', '='],
  ];

  return (
    <div className='contenedorTeclado'>
      <div className="keyboard">
        {keys.map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row">
            {row.map((key) => (
              <button key={key} className="key">
                <div className="braille-symbol">{charToBrailleMap[key.toLowerCase()] || key}</div>
                <div className="ascii-symbol">{key}</div>
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teclado;
