import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/unservicio-white.svg';
import Vite from '../../assets/vite.svg';
const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <Link to="/" className='logo-link'>
                    <img src={Logo} alt="UnServicio" className="logo-unservicio" />
                    <span class="logo-title">UnServicio</span>
                </Link>


            </div>
            <div className="search-container">
                <input type="text" placeholder="Buscar servicios..." className="search-input" />
            </div>
            <div className="login-container">
                <Link to="/login">
                    <img src={Vite} className="login-perfil"></img>
                </Link>
            </div>
        </header>
    );
};

export default Header;

