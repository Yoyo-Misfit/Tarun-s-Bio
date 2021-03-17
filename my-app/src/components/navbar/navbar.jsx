import React, { Component } from 'react';
import './navbar.css';

class NavBar extends Component {

    render() {
        return (
            <div className="navbar">
                <a href='/about'>About</a>
                <a href='/projects'>Projects</a>
                <a href='/qac'>Q & C</a>

            </div>

        );
    }
};

export default NavBar;