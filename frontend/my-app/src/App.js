import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import Traductor from './components/Traductor/Traductor';
import Footer from './components/Footer/Footer';
import Option from './components/Options/Option';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [option, setOption] = useState('Traducir texto');

  useEffect(() => {
    const body = document.body;
    if (!isDarkMode) { /*Modo negro inicial*/ 
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

  return (
    <div className='App'>
      <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Option onOptionClick={handleOptionClick} />
      <Traductor option={option} />
      <Footer />
    </div>
  );
};

export default App;
