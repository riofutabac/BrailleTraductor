
import React from 'react';
import './Teclado.css';

export const Teclado = () => {
  const keys = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace'],
    ['Shift', 'Space', 'Enter'],
    ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
  ];

  return (
    <div className="keyboard">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) => (
            <button key={key} className="key">{key}</button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Teclado;
