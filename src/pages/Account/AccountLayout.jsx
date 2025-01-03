import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AccountLayout = () => {
    return (
        <div className="container-fluid h-100">
            <div className="row h-100 overflow-auto">
                <aside className="col-md-3 bg-light p-3 h-100">
                    <nav>
                        <ul className="nav flex-column ms-5">
                            <li className="nav-item">
                                <Link className="nav-link" to="/account/profile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/account/settings">Settings</Link>
                            </li>
                        </ul>
                    </nav>
                </aside>

                <section className="col-md-9 p-3 text-center h-100 ">
                    <Outlet />
                </section>
            </div>
        </div>
    );
};

export default AccountLayout;