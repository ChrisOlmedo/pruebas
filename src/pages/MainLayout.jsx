import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer.jsx';
import Header from '../components/Header/Header.jsx';

const MainLayout = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="main-container">
            <Header isLoggedIn={isLoggedIn} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;