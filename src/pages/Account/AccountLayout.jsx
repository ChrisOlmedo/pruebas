import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AccountLayout = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <aside className="col-md-3 bg-light p-3">
                    <nav>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link className="nav-link" to="/account/profile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/account/settings">Settings</Link>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </div>
            <main className="col-md-9 p-3">
                <Outlet />
            </main>
        </div>
    );
};

export default AccountLayout;