import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoLogIn, IoPersonCircleSharp, IoSearch } from "react-icons/io5";
import { BiSolidMapPin } from "react-icons/bi";
import { GoProjectRoadmap } from "react-icons/go";
import { LuMapPinHouse } from "react-icons/lu";

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



    //Ubicación

    const [location, setLocation] = useState("Detectando ubicación...");
    const [manualLocation, setManualLocation] = useState("");

    // Detectar ubicación automática
    useEffect(() => {
        if (!manualLocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    // Convertir coordenadas a una ubicación amigable
                    const response = await fetch(
                        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
                    );
                    const data = await response.json();
                    setLocation(data.city || "Ubicación no disponible");
                },
                () => {
                    setLocation("No se pudo detectar la ubicación");
                }
            );
        }
    }, [manualLocation]);

    // Manejar cambio manual de ubicación
    const handleManualLocation = (event) => {
        if (event.key === "Enter") {
            setManualLocation(event.target.value);
            setLocation(event.target.value);
            event.target.value = ""; // Limpiar el input
        }
    };

    return (
        <>
            <div className='header-space'></div>
            <header className='header'>
                <div className="header-container">
                    <div className="logo-container">
                        <GoProjectRoadmap color="white" size={"35px"} />
                        <Link to="/" className='text-decoration-none'>
                            <UnServicioLogo color={"white"} height={"35px"} />
                        </Link>
                    </div>
                    <div className="search-container">
                        <form action="" className="search-form">
                            <div className='search-icon'>
                                <BiSolidMapPin size={"30px"} />
                            </div>
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
                            <Link to="/login" onClick={handleLogin} className='text-decoration-none text-white login-container'>
                                <IoLogIn color="white" size={"35px"} />
                                <span className='login-span'>Ingresar</span>
                            </Link>
                        )}
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-container">
                        <LuMapPinHouse color="white" size={"20px"} />
                        <span>{location}</span>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;