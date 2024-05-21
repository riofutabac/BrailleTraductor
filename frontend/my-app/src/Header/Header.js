import React from 'react';
import './Header.css';;

const Header = () => {
    return (
        <header className="header">

            <nav>
                <ul className="nav-links">
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#about">Acerca de</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
