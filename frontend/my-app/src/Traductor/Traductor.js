import React, { useState } from 'react';
import './Traductor.css';
import { chevronDownOutline } from 'ionicons/icons';

const Traductor = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [dropdownActive, setDropdownActive] = useState(false);
    const [inputLanguage, setInputLanguage] = useState('Español');

    const toggleDropdown = () => {
        setDropdownActive(!dropdownActive);
    };

    const traducir = async () => {

    };

    return (
        <section className="container">
            <div className="card input-wrapper">
                <div className="from">
                    <span className="heading">Desde:</span>
                    <div className={`dropdown-container ${dropdownActive ? 'active' : ''}`} id="input-language">
                        <div className="dropdown-toggle" onClick={toggleDropdown}>
                            <span className='selected-language'>{inputLanguage}</span>
                        </div>
                        <ul className="dropdown-menu">
                            <li className={`option ${inputLanguage === 'English' ? 'active' : ''}`} onClick={() => setInputLanguage('English')}>English</li>
                            <li className={`option ${inputLanguage === 'Español' ? 'active' : ''}`} onClick={() => setInputLanguage('Español')}>Español</li>
                        </ul>
                        <div className='text-area'>
                            <textarea
                                placeholder='Escribe algo...'
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                id="input-text" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className='center'>
                <div className="swap-position" onClick={traducir}>
                    <ion-icon name={chevronDownOutline}></ion-icon>
                </div>
            </div>
            <div className="card output-wrapper">
                <textarea
                    placeholder='Traducción...'
                    value={outputText}
                    readOnly
                    cols="30" rows="10"></textarea>
            </div>
        </section>
    );
};

export default Traductor;
