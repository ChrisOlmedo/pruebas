import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Vite from '../../assets/vite.svg';
import UnServicioLogo from '../UnServicio-logo/UnServicioLogo.jsx';

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <Link to="/" className='text-decoration-none'>
                    <UnServicioLogo color="white" height="35px" />
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