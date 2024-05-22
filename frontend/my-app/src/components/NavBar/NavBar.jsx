import React from 'react'
import './NavBar.css'
import logo_empresa from '../../assets/logo.png';
const NavBar = () => {
    return (
        <div className='navbar'>
            <img src={logo_empresa} alt='Ironhack logo' className='logo' />
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>PDF</a></li>
            </ul>
            <div className='btn-modo'>
                <div className="toggle">
                    <input id="toggle-switch" type="checkbox"></input>
                    <label for="toggle-switch"></label>
                </div>
            </div>

        </div>
    )
}

export default NavBar
