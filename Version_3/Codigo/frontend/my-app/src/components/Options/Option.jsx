// Option.js
import React from 'react';
import './Option.css';

/**
 * Componente Option que muestra una opción para traducir texto.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Function} props.onOptionClick - Función que se ejecuta al hacer clic en la opción.
 * 
 * @component
 * @example
 * const handleOptionClick = (option) => { console.log(option); };
 * 
 * return (
 *   <Option onOptionClick={handleOptionClick} />
 * )
 */
const Option = ({ onOptionClick }) => {
  return (
    <div className="options-container">
      <div className="option" onClick={() => onOptionClick('Traducir texto')}>
        <ion-icon name="globe-outline" size="large"></ion-icon>
        <div>
          <h3>Traducir texto</h3>
        </div>
      </div>
    </div>
  );
};

export default Option;
