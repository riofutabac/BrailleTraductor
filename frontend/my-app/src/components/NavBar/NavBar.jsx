import React from 'react'
import './NavBar.css'
import logo_empresa from '../../assets/logo.png'; 
const NavBar = () => {
    return (
        <div className='navbar'>
            <img src={logo_empresa} alt='Ironhack logo' className='logo' />
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Productos</a></li>
                <li><a href='#'>Features</a></li>
                <li><a href='#'>Precios</a></li>
            </ul>
        </div>
    )
}

export default NavBar
