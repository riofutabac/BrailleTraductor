import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import Traductor from './components/Traductor/Traductor';
import Footer from './components/Footer/Footer';
import Option from './components/Options/Option';
import { Helmet } from 'react-helmet';
import './App.css';
import { Teclado } from './components/Teclado/Teclado';

/**
 * Componente principal de la aplicación que gestiona el estado y la lógica general.
 * 
 * @component
 * @example
 * return (
 *   <App />
 * )
 */
const App = () => {
  // Estado para el modo oscuro
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Estado para la opción seleccionada
  const [option, setOption] = useState('Traducir texto');
  // Estado para el idioma de entrada
  const [inputLanguage, setInputLanguage] = useState('Español');
  // Estado para el idioma de salida
  const [outputLanguage, setOutputLanguage] = useState('Braille');
  // Estado para el texto de entrada
  const [inputText, setInputText] = useState('');

  // Efecto que actualiza la clase del cuerpo del documento según el modo oscuro
  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [isDarkMode]);

  /**
   * Función para alternar el modo oscuro.
   */
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  /**
   * Función para manejar el clic en una opción.
   * 
   * @param {string} option - La opción seleccionada.
   */
  const handleOptionClick = (option) => {
    setOption(option);
  };

  /**
   * Función para manejar el cambio de idioma.
   * 
   * @param {string} inputLang - El idioma de entrada.
   * @param {string} outputLang - El idioma de salida.
   */
  const handleLanguageChange = (inputLang, outputLang) => {
    setInputLanguage(inputLang);
    setOutputLanguage(outputLang);
  };

  return (
    <div className='App'>
      <Helmet>
        <title>TechForge - Traductor Braille</title>
      </Helmet>
      <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Option onOptionClick={handleOptionClick} />
      <Traductor
        option={option}
        onLanguageChange={handleLanguageChange}
        inputText={inputText}
        setInputText={setInputText}
      />
      <Teclado
        setInputText={setInputText}
        inputText={inputText}
        inputLanguage={inputLanguage}
        outputLanguage={outputLanguage}
      />
      <Footer />
    </div>
  );
};

export default App;
