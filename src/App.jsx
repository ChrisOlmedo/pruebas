import './styles/App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx'
import NoPage from './pages/NoPage/NoPage.jsx'
import Login from './pages/Login/Login.jsx'
import Profile from './pages/Account/Profile.jsx'
import Settings from './pages/Account/Settings.jsx'
import MainLayout from './pages/MainLayout.jsx'
import AccountLayout from './pages/Account/AccountLayout.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="account" element={<AccountLayout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
};
export default App;
