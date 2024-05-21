import React from 'react';
import './App.css';
import Header from './Header/Header'; // Asegúrate de que la ruta es correcta
import Traductor from './Traductor/Traductor';

function App() {
    return (
        <div className="App">
            <Header />
            <Traductor />
        </div>
    );
}

export default App;
