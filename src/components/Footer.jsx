import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <p>&copy; {new Date().getFullYear()} UnServicio. Todos los derechos resevados.</p>
            </div>
        </footer>
    );
};

export default Footer;