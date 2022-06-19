import { Link } from 'react-router-dom';
import './CSS/Navbar/Navbar.css'
import React, { useEffect } from 'react'

function Navbar() {

    window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    })

    return (
        <header id='na' >
            <a href="" > <Link className="logo" to="/NicoIhleCode">Portfolio</Link></a>
            <input id="page-nav-toggle" class="main-navigation-toggle" type="checkbox" />
            <label for="page-nav-toggle">
                <svg class="icon--menu-toggle" viewBox="0 0 60 30">
                    <g class="icon-group">
                        <g class="icon--menu">
                            <path d="M 6 0 L 54 0" />
                            <path d="M 6 15 L 54 15" />
                            <path d="M 6 30 L 54 30" />
                        </g>
                        <g class="icon--close">
                            <path d="M 15 0 L 45 30" />
                            <path d="M 15 30 L 45 0" />
                        </g>
                    </g>
                </svg>
            </label>

            <nav class="main-navigation">
                <ul>
                    <li><a target="_blank" href="https://www.linkedin.com/in/nico-ihle">LinkedIn</a></li>
                    <li><a target="_blank" href="https://github.com/Nico-T-Ihle">Github</a></li>
                    <li><a target="_blank" href="https://www.instagram.com/nico.yuy/">Instagram</a></li>
                    <li><a href="#0">CLI-Website</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
