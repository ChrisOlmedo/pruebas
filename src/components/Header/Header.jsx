import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoLogIn, IoPersonCircleSharp, IoSearch } from "react-icons/io5";

import './Header.css';
import UnServicioLogo from '../UnServicio-logo/UnServicioLogo.jsx';

const Header = () => {

    // Estado para saber si el usuario está logeado o no
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Verificar si hay un estado previo de login en localStorage
    useEffect(() => {
        const storedLoginState = localStorage.getItem('isLoggedIn');
        if (storedLoginState === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    // Función para manejar el inicio de sesión
    const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true'); // Guardar el estado de login en localStorage
    };

    // Función para manejar el cierre de sesión
    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', 'false'); // Eliminar el estado de login en localStorage
    };
    return (
        <>
            <div className='header-space'></div>
            <header className='header'>
                <div className="header-container">
                    <div className="logo-container">
                        <Link to="/" className='text-decoration-none'>
                            <UnServicioLogo color={"white"} height={"35px"} />
                        </Link>
                    </div>
                    <div className="search-container">
                        <form action="" className="search-form">
                            <input type="text" placeholder="Buscar servicios..." className="search-input" />
                            <button className="search-button" aria-label="buscar">
                                <IoSearch color={"gray"} size={"30px"} />
                            </button>
                        </form>
                    </div>
                    <div className="profile-container">
                        {isLoggedIn ? (
                            <Link to="/account/profile" onClick={handleLogout} className='text-decoration-none text-white'>
                                <IoPersonCircleSharp color="white" size={"35px"} />
                            </Link>
                        ) : (
                            <Link to="/login" onClick={handleLogin} className='text-white login-container'>
                                <IoLogIn color="white" size={"35px"} />
                                Ingresar
                            </Link>
                        )}
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-container">
                        <span>Tu ubicación</span>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;