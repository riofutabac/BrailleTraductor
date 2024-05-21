import React from 'react';
import './Traductor.css';

const Traductor = () => {
    const [inputText, setInputText] = React.useState('');
    const [output, setOutput] = React.useState('es');
    const [outputText, setOutputText] = React.useState('');

    const traducir = async () => {
    }

    return (
        <section className="traductor">
            <div className="row-wrapper">
                <div className="translator-container input-lang">
                    <div className="top-row">
                        <button
                            className="btn btn-primary btn-translate"
                            onClick={traducir}
                        >
                            Traducir
                        </button>
                    </div>
                    <form className="input-form">
                        <textarea
                            className="text-box"
                            placeholder="Ingrese el texto aquí..."
                            onChange={e => setInputText(e.target.value)}
                        >
                        </textarea>
                    </form>
                </div>
                <div className="translator-container output-lang">
                    <div className="top-row">
                        <select
                            name="languages"
                            id="languages"
                            className="form-select form-select-sm"
                            onChange={e => setOutput(e.target.value)}
                        >
                            <option value="es">Español</option>
                            <option value="en">Inglés</option>
                            <option value="braille">Braille</option>
                        </select>
                    </div>
                    <p className="text-box output-box">
                        {outputText}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Traductor;
