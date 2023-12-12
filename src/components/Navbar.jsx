import React from 'react'
import "../App.css"
// import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
    // const { loginWithRedirect,user,  isAuthenticated, logout } = useAuth0();
    return (
        <>
            <nav class="navbar">
                <div class="navbar-container container">
                    <input type="checkbox" name="" id="" />
                    <div class="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </div>
                    <ul class="menu-items">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Category</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Testimonial</a></li>
                        <li><a href="#">Contact</a></li>

                        {/* <li>
                        {
                            isAuthenticated &&    <p>{user.email}</p>
                        }
                        </li>

                        <li>
                        {
                            isAuthenticated &&    <p>{user.name}</p>
                        }
                        </li> */}

                       


                        {/* {   isAuthenticated ?
                            <li><a href="#">  <button className="curve" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                Log Out
                            </button></a></li>
                            :
                            <li><a href="#"> <button className="curve" onClick={() => loginWithRedirect()}>Log In</button></a></li>
                        } */}
                    </ul>
                    <h1 class="logo">NewsPOST</h1>
                </div>
            </nav>
        </>
    )
}

export default Navbar