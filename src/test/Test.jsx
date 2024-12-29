import React, { useEffect, useState } from 'react';

function StatusConnection() {

    const [statusMessage, setStatusMessage] = useState('Conectando al backend...');

    useEffect(() => {
        const checkBackendConnection = async () => {
            try {
                const response = await fetch('https://spangle-wood-iberis.glitch.me/api/test');
                if (response.ok) {
                    const data = await response.json();
                    if (data.message) {
                        setStatusMessage(data.message);
                    } else {
                        setStatusMessage('Respuesta inesperada del backend.');
                    }
                } else {
                    setStatusMessage('Error al conectar con el backend.');
                }
            } catch (error) {
                console.error('Error al conectar con el backend:', error);
                setStatusMessage('No se pudo conectar al backend.');
            }
        };

        checkBackendConnection();
    }, []);

    return (
        <div>
            <p>{statusMessage}</p>
        </div>
    );

}

export default StatusConnection;