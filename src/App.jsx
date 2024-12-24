import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [statusMessage, setStatusMessage] = useState('Conectando al backend...');

  const fetchData = async () => {
    try {
      const response = await fetch('https://spangle-wood-iberis.glitch.me/api/test');
      const data = await response.json();
      console.log(data.message); // Debería imprimir "¡Hola desde el backend!"
      setStatusMessage(data.message);
    } catch (error) {
      console.error('Error al comunicarse con el backend:', error);
      setStatusMessage('No se pudo conectar al backend.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
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
        <h2 className="fs-1 fw-bold my-5 text-warning">
          ¡Página en desarrollo!
        </h2>
        <p>{statusMessage}</p>
      </div>
    </>
  )
}

export default App
