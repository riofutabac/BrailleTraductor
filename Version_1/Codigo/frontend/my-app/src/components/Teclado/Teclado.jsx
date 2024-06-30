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

/**
 * Componente Teclado que muestra un teclado virtual para ingresar texto Braille.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Function} props.setInputText - Función para actualizar el texto de entrada.
 * @param {string} props.inputText - Texto actual de entrada.
 * @param {boolean} props.isDisabled - Indica si el teclado debe estar deshabilitado.
 * 
 * @component
 * @example
 * const [inputText, setInputText] = useState('');
 * 
 * return (
 *   <Teclado setInputText={setInputText} inputText={inputText} isDisabled={false} />
 * )
 */
export const Teclado = ({ setInputText, inputText, isDisabled }) => {


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
    if (isDisabled) return;

    let updatedText = inputText;

    if (key === 'borrar') {
      setInputText(inputText.slice(0, -1));
      setInNumberSequence(false);
      return;
    } else if (key === 'espacio') {
      updatedText += ' ';
      setInNumberSequence(false); 
    } else if (key === 'enter') {
      updatedText += '\n';
      setInNumberSequence(false); 
    } else {
      if (charToBrailleMap[key.toLowerCase()]) {
        if (key.match(/[0-9]/)) { 
          if (!inNumberSequence || inputText.endsWith(' ')) {
            updatedText += '⠼';
            setInNumberSequence(true);
          }
          updatedText += charToBrailleMap[key.toLowerCase()];
        } else {
          updatedText += charToBrailleMap[key.toLowerCase()];
          setInNumberSequence(false); 
        }
      } else {
        updatedText += key;
        setInNumberSequence(false); 
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
              <button key={key} className="key" onClick={() => handleKeyPress(key)} disabled={isDisabled}>
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
