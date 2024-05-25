import React from 'react';
import './Option.css';

const Option = ({ onOptionClick }) => {
  return (
    <div className="options-container">
      <div className="option" onClick={() => onOptionClick('Traducir texto')}>
        <ion-icon name="globe-outline" size="large"></ion-icon>
        <div>
          <h3>Traducir texto</h3>
        </div>
      </div>
      <div className="option" onClick={() => onOptionClick('Archivo')}>
        <ion-icon name="document-attach-outline" size="large"></ion-icon>
        <div>
          <h3>Archivo</h3>
        </div>
      </div>
    </div>
  );
};

export default Option;
