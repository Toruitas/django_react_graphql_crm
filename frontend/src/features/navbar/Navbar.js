import React from 'react';
import {NavLink} from 'react-router-dom'
import styles from './Navbar.module.scss';

export function Navbar(){
    const authToken = localStorage.getItem('refresh_token');


    return (
        <nav className="navbar is-fixed-top is-transparent">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <span id="navbar-brandname">The 2-day CRM</span>
                </a>
                <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
                </div>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start">
                </div>
                <div className="navbar-end">
                    { authToken ? (
                        <NavLink className="navbar-item" onClick={() => {
                            localStorage.removeItem('refresh_token');
                            this.props.history.push(`/`)
                        }}>Logout</NavLink>
                    ) : (<>
                            <NavLink className="navbar-item" to={'/login/'}>
                                Login
                            </NavLink>
                            <NavLink className="navbar-item" to={'/signup/'}>
                                Sign Up
                            </NavLink>
                        </>
                    )}

                </div>
            </div>
        </nav>
    )
}