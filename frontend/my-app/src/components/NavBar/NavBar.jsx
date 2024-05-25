import React from 'react';
import './NavBar.css';
import logo_empresa from '../../assets/logo.png';

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
