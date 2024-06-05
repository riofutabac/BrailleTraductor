import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import Traductor from './components/Traductor/Traductor';
import Footer from './components/Footer/Footer';
import Option from './components/Options/Option';
import { Helmet } from 'react-helmet';
import './App.css';


import { Teclado } from './components/Teclado/Teclado';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [option, setOption] = useState('Traducir texto');
  const [inputLanguage, setInputLanguage] = useState('Español');
  const [outputLanguage, setOutputLanguage] = useState('Braille');
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleOptionClick = (option) => {
    setOption(option);
  };

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
      <Traductor option={option} onLanguageChange={handleLanguageChange} inputText={inputText} setInputText={setInputText} />
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
