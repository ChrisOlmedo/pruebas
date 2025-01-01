import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import UnServicioIcon from '../UnServicio-logo/UnServicioIcon.jsx';

const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <p>&copy; {new Date().getFullYear()} UnServicio. Todos los derechos resevados.</p>
                <div className='footer-logo'>
                    <Link to='/' >
                        <UnServicioIcon color='white' />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;