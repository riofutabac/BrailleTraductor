import React, { useState } from 'react';
import './Traductor.css';
import Option from '../Options/Option';

const Traductor = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [inputDropdownActive, setInputDropdownActive] = useState(false);
    const [outputDropdownActive, setOutputDropdownActive] = useState(false);
    const [inputLanguage, setInputLanguage] = useState('Español');
    const [outputLanguage, setOutputLanguage] = useState('Braille');

    const toggleInputDropdown = () => {
        setInputDropdownActive(!inputDropdownActive);
    };

    const toggleOutputDropdown = () => {
        setOutputDropdownActive(!outputDropdownActive);
    };

    const selectInputLanguage = (language) => {
        setInputLanguage(language);
        setInputDropdownActive(false);
    };

    const selectOutputLanguage = (language) => {
        setOutputLanguage(language);
        setOutputDropdownActive(false);
    };

    const swapLanguagesAndTexts = () => {
        const tempInputText = inputText;
        const tempInputLanguage = inputLanguage;

        setInputText(outputText);
        setInputLanguage(outputLanguage);

        setOutputText(tempInputText);
        setOutputLanguage(tempInputLanguage);
    };

    const traducir = async () => {
        // Tu lógica de traducción aquí
    };

    return (
        
        <section className="cuerpo-container">
        
            <div className="card input-wrapper">
                <div className="from">
                    <span className="heading">Desde:</span>
                    <div className={`dropdown-container ${inputDropdownActive ? 'active' : ''}`} id="input-language">
                        <div className="dropdown-toggle" onClick={toggleInputDropdown}>
                            <ion-icon name="globe-outline"></ion-icon>
                            <span className='selected-language'>{inputLanguage}</span>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                        <ul className="dropdown-menu">
                            <li className={`option ${inputLanguage === 'Español' ? 'active' : ''}`} onClick={() => selectInputLanguage('Español')}>Español</li>
                            <li className={`option ${inputLanguage === 'Braille' ? 'active' : ''}`} onClick={() => selectInputLanguage('Braille')}>Braille</li>
                        </ul>
                    </div>
                </div>
                <div className='text-area'>
                    <textarea
                        placeholder='Escribe algo...'
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        id="input-text" cols="30" rows="10"></textarea>
                    <div className='chars'><span id='input-chars'>{inputText.length}</span>/5000 </div>
                </div>
                <div className='card-buttom'>
                    <label htmlFor='file-upload' className='upload-title'>
                        <ion-icon name="cloud-upload-outline"></ion-icon>
                        <p>Subir archivo</p>
                        <input type='file' id='file-upload' hidden />
                    </label>
                </div>
            </div>
            <div className='center'></div>
            <div className='swap-position' onClick={swapLanguagesAndTexts}>
                <ion-icon name="swap-horizontal-outline"></ion-icon>
            </div>
            <div className="card output-wrapper">
                <div className="from">
                    <span className="heading">A:</span>
                    <div className={`dropdown-container ${outputDropdownActive ? 'active' : ''}`} id="output-language">
                        <div className="dropdown-toggle" onClick={toggleOutputDropdown}>
                            <ion-icon name="globe-outline"></ion-icon>
                            <span className='selected-language'>{outputLanguage}</span>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                        <ul className="dropdown-menu">
                            <li className={`option ${outputLanguage === 'Español' ? 'active' : ''}`} onClick={() => selectOutputLanguage('Español')}>Español</li>
                            <li className={`option ${outputLanguage === 'Braille' ? 'active' : ''}`} onClick={() => selectOutputLanguage('Braille')}>Braille</li>
                        </ul>
                    </div>
                </div>
                <div className='text-area'>
                    <textarea
                        placeholder='TraducDción...'
                        value={outputText}
                        onChange={(e) => setOutputText(e.target.value)}
                        id="output-text" cols="30" rows="10"></textarea>
                </div>
            </div>

        </section>
    );
};

export default Traductor;
