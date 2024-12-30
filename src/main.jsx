import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css'
import App from './App.jsx'

// Crear el root para renderizar la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

// Usar StrictMode y BrowserRouter para el enrutamiento
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);