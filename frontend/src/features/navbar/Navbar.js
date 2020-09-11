import React from 'react';
import {NavLink} from 'react-router-dom'
import styles from './Navbar.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import {logoutAsync, selectLoggedIn} from '../auth/authSlice';
import { useHistory } from 'react-router-dom'

export function Navbar(){
    const loggedIn = useSelector(selectLoggedIn);
    const dispatch = useDispatch();
    const history = useHistory();

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
                    { loggedIn ? (
                        <a className="navbar-item" onClick={() => dispatch(logoutAsync(history))}>Logout</a>
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