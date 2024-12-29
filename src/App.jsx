import './styles/App.css'
import React from 'react';
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'

function App() {


  return (
    <>
      <div className="main-container">
        <Header />
        <Home />
        <Footer />
      </div >
    </>
  )
}
export default App;
