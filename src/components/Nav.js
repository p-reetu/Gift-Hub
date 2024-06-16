import React from 'react';
import "./Nav.css";
import logo from '../assets/logo.png'; 
import profileIcon from '../assets/profileIcon.png'; 

export default function Nav() {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <img src={logo} alt="Logo" className="nav-logo" />
            </div>
            <div className="nav-center">
                <div className="nav-combined-button">
                    <button className="nav-button-left">Gifts Received</button>
                    <button className="nav-button-right">Gifts Sent</button>
                </div>
            </div>
            <div className="nav-right">
                <img src={profileIcon} alt="Profile" className="profile-icon" />
            </div>
        </nav>
    );
}
