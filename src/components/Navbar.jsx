import React from 'react'
import "../Home.css"

function Navbar() {
    return (
        <>
            <header id="topHeader">
                <ul id="topInfo">
                    <li>+974 98765432</li>
                    <li>newspost@news.com</li>
                </ul>

                <nav>
                    <span class="logo">NewsPOST</span>
                    <div class="menu-btn-3" onclick="menuBtnFunction(this)">
                        <span></span>
                    </div>
                    <div class="mainMenu">
                        <a href="#"><span>Home</span></a>
                        <a href="#"><span>Services</span></a>
                        <a href="#"><span>Portfolio</span></a>
                        <a href="#"><span>About Us</span></a>
                        <a href="#"><span>Career</span></a>
                        <a href="#"><span>Blog</span></a>
                        <a href="#">Get Started</a>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar