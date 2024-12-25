import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'

function App() {

  const [count, setCount] = useState(0); const [statusMessage, setStatusMessage] = useState('Conectando al backend...');

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
    <>
      <div className="main-container">
        <Header />
        <main className='react-container'>
          <div >
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="cardb">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <h2 className="fs-1 fw-bold my-5 text-ligth">
              ¡Página en desarrollo!
            </h2>
            <p>{statusMessage}</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
export default App;
