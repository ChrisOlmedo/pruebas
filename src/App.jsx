import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
      </div>
    </>
  )
}

export default App
