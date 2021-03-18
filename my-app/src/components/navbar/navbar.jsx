import React, { Component } from 'react';
import './navbar.css';
import { SocialIcon } from 'react-social-icons';

class NavBar extends Component {

    render() {
        return (
            <div className="NavBar">
                <a href='/about'>About</a>
                <a href='/projects'>Projects</a>
                <a href='/qac'>Q & C</a>
                <div className="SocialLinks">
                    <SocialIcon bgColor="black" fgColor="white" url="https://www.linkedin.com/in/tarun-alagharu-a61022187/" />
                    <SocialIcon bgColor="black" fgColor="white" url="https://github.com/Yoyo-Misfit" />
                    <SocialIcon bgColor="black" fgColor="white" url="mailto:tarunportfolio401@gmail.com" />
                </div>
            </div>

        );
    }
};

export default NavBar;