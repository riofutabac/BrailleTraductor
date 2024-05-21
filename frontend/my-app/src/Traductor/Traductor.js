import React, { useState } from 'react';
import './Traductor.css';

const Traductor = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [dropdownActive, setDropdownActive] = useState(false);
    const [inputLanguage, setInputLanguage] = useState('Español');

    const toggleDropdown = () => {
        setDropdownActive(!dropdownActive);
    };

    const selectLanguage = (language) => {
        setInputLanguage(language);
        setDropdownActive(false);  // Collapse dropdown after selection
    };

    const traducir = async () => {
        // Your translation logic here
    };

    return (
        <section className="container">
            <div className="card input-wrapper">
                <div className="from">
                    <span className="heading">Desde:</span>
                    <div className={`dropdown-container ${dropdownActive ? 'active' : ''}`} id="input-language">
                        <div className="dropdown-toggle" onClick={toggleDropdown}>
                            <ion-icon name="globe-outline"></ion-icon>
                            <span className='selected-language'>{inputLanguage}</span>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                        <ul className="dropdown-menu">
                            <li className={`option ${inputLanguage === 'English' ? 'active' : ''}`} onClick={() => selectLanguage('English')}>English</li>
                            <li className={`option ${inputLanguage === 'Español' ? 'active' : ''}`} onClick={() => selectLanguage('Español')}>Español</li>
                        </ul>
                    </div>
                </div>
                {/* Mueve el textarea fuera de .from para que no esté al lado del menú de idiomas */}
                <div className='text-area'>
                    <textarea
                        placeholder='Escribe algo...'
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        id="input-text" cols="30" rows="10"></textarea>
                    <div className='chars'><span id='input-chars'>0</span>/5000 </div>
                </div>
            </div>
        </section>
    );

};

export default Traductor;
