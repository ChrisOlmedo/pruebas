import './styles/App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Home from './pages/Home.jsx'
import NoPage from './pages/NoPage.jsx'

function App() {


  return (
    <>
      <div className="main-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </div >
    </>
  )
}
export default App;
