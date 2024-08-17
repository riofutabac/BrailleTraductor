// NavBar.js
import React from 'react';
import './NavBar.css';
import logo_empresa from '../../assets/logo.png';

/**
 * Componente NavBar que muestra la barra de navegación.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Function} props.toggleDarkMode - Función para alternar el modo oscuro.
 * @param {boolean} props.isDarkMode - Estado que indica si el modo oscuro está activado.
 * 
 * @component
 * @example
 * const [isDarkMode, setIsDarkMode] = useState(false);
 * const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
 * 
 * return (
 *   <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
 * )
 */
const NavBar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div className='navbar'>
      <img 
        src={logo_empresa} 
        alt='Ironhack logo' 
        className={`logo ${isDarkMode ? 'logo-dark' : ''}`} 
      />
      <ul>
        <li><a href='#'>Home</a></li>
      </ul>
      <div className='Titulo'>
        <p>Traductor Braille</p>
      </div>
      <div className='btn-modo'>
        <div className="toggle">
          <input id="toggle-switch" type="checkbox" onChange={toggleDarkMode}></input>
          <label htmlFor="toggle-switch"></label>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
