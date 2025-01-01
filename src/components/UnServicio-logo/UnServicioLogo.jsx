import React from 'react';
import './UnServicioLogo.css';
import UnServicioIcon from './UnServicioIcon';

const calculateFontSize = (height) => {
    if (!height || typeof height !== 'string') {
        console.warn('Invalid height:', height);
        return '16px'; // Valor por defecto en caso de error
    }
    const numericPart = parseFloat(height);
    const unitPart = height.replace(/[0-9.]/g, '');

    if (isNaN(numericPart)) {
        console.warn('Height does not contain a numeric value:', height);
        return '16px'; // Valor por defecto
    }

    return `${numericPart * 0.5}${unitPart}`;
};


const UnServicioLogo = ({ color, height }) => {

    const fontSize = calculateFontSize(height);
    return (
        <div className='logo-unservicio-container' style={{ height }}>
            <UnServicioIcon color={color} />
            <span className="logo-unservicio-title" style={{ color, fontSize }}>UnServicio</span>
        </div >
    );
};

export default UnServicioLogo;
