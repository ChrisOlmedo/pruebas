import './styles/App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'

function App() {


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
