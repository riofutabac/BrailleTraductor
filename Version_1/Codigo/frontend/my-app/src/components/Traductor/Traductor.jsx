import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Traductor.css';

const Traductor = ({ option, inputText, setInputText, onLanguageChange }) => {
    const [outputText, setOutputText] = useState('');
    const [inputDropdownActive, setInputDropdownActive] = useState(false);
    const [outputDropdownActive, setOutputDropdownActive] = useState(false);
    const [inputLanguage, setInputLanguage] = useState('Español');
    const [outputLanguage, setOutputLanguage] = useState('Braille');
    const [loading, setLoading] = useState(false);

    const toggleInputDropdown = () => {
        setInputDropdownActive(!inputDropdownActive);
    };

    const toggleOutputDropdown = () => {
        setOutputDropdownActive(!outputDropdownActive);
    };

    const selectInputLanguage = (language) => {
        setInputLanguage(language);
        setInputDropdownActive(false);
        onLanguageChange(language, outputLanguage);
    };

    const selectOutputLanguage = (language) => {
        setOutputLanguage(language);
        setOutputDropdownActive(false);
        onLanguageChange(inputLanguage, language);
    };

    const swapLanguagesAndTexts = () => {
        const tempInputText = inputText;
        const tempInputLanguage = inputLanguage;

        setInputText(outputText);
        setInputLanguage(outputLanguage);

        setOutputText(tempInputText);
        setOutputLanguage(tempInputLanguage);
        onLanguageChange(outputLanguage, tempInputLanguage);
    };

    const handleInputChange = (e) => {
        const text = e.target.value;
        if (text.length <= 5000) {
            setInputText(text);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(outputText);
        alert('Texto copiado al portapapeles');
    };

    const translateText = async (text) => {
        setLoading(true);
        try {
            const direction = inputLanguage === 'Español' && outputLanguage === 'Braille' ? 'Braille' : 'Español';
            const response = await axios.get(`http://localhost:8000/api/translate/${encodeURIComponent(text)}/${direction}`);
            setOutputText(response.data.translated_text);
        } catch (error) {
            console.error('Error translating text:', error);
            alert('Error al traducir el texto.');
        } finally {
            setLoading(false);
        }
    };

    const downloadPDF = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/generate-pdf/${encodeURIComponent(outputText)}`);
            if (!response.ok) throw new Error('Error al generar el PDF');
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'translation.pdf';
            document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
            a.click();
            a.remove();  //afterwards we remove the element again         
        } catch (error) {
            console.error(error);
        }
    };

    const downloadImage = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/generate-image/${encodeURIComponent(outputText)}`);
            if (!response.ok) throw new Error('Error al generar la imagen');
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'translation.png'; // Puedes cambiar el nombre del archivo aquí
            document.body.appendChild(a);
            a.click();
            a.remove();
        } catch (error) {
            console.error(error);
        }
};

    useEffect(() => {
        if (inputText) {
            translateText(inputText);
        } else {
            setOutputText('');
        }
    }, [inputText]);

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
                    {option === 'Traducir texto' && (
                        <>
                            <div className='textarea-wrapper'>
                                <textarea
                                placeholder='Escribe algo...'
                                value={inputText}
                                onChange={handleInputChange}
                                disabled={inputLanguage === 'Braille'}
                                id="input-text"
                                cols="30"
                                rows="10"
                                ></textarea>
                                {inputText && (
                                    <button className="clear-text-button" onClick={() => setInputText('')} title='Limpiar cuadro de texto'>
                                        <ion-icon name="close-circle"></ion-icon>
                                    </button>
                                )}
                                <div className='chars'><span id='input-chars'>{inputText.length}</span>/5000 </div>
                            </div>
                            
                        </>
                    )}
                    {option === 'Archivo' && (
                        <label htmlFor='file-upload' className='upload-title'>
                            <ion-icon name="cloud-upload-outline"></ion-icon>
                            <p>Subir archivo</p>
                            <input type='file' id='file-upload' hidden />
                        </label>
                    )}
                </div>
            </div>
            <div className='center'></div>
            {option === 'Traducir texto' && (
                <div className='swap-position' onClick={swapLanguagesAndTexts} title='Intercambiar lenguaje'>
                    <ion-icon name="swap-horizontal-outline"></ion-icon>
                </div>
            )}
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
                        placeholder='Traducción...'
                        value={outputText}
                        readOnly={outputLanguage === 'Braille'}
                        id="output-text"
                        cols="30"
                        rows="10"
                    ></textarea>
                </div>
                <div className="output-actions">
                    <button onClick={copyToClipboard} disabled={!outputText} title='Copiar al portapapeles'>
                        <ion-icon name="clipboard-outline"></ion-icon>
                    </button>
                    <button onClick={downloadPDF} disabled={outputLanguage !== 'Braille' || !outputText} title='Descargar como PDF'>
                        <ion-icon name="download-outline"></ion-icon>
                    </button>
                    <button onClick={downloadImage} disabled={outputLanguage !== 'Braille' || !outputText} title='Descargar como imagen'>
                        <ion-icon name="image-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Traductor;
