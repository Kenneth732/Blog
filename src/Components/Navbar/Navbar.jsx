import React from 'react'
import Logo from '../assets/images/logo.svg'
import './Navbar.css'

function Navbar() {
    return (
        <>
            <header class="header section" data-header>
                <div class="container">

                    <a href="#" class="logo">
                        <img src={Logo} style={{ "width": "129", "height": "40" }} alt="Blogy logo" />
                    </a>

                    <nav class="navbar" data-navbar>
                        <ul class="navbar-list">

                            <li class="navbar-item">
                                <a href="#" class="navbar-link hover:underline" data-nav-link>Home</a>
                            </li>

                            <li class="navbar-item">
                                <a href="#" class="navbar-link hover:underline" data-nav-link>Recent Post</a>
                            </li>

                            <li class="navbar-item">
                                <a href="#" class="navbar-link hover:underline" data-nav-link>Membership</a>
                            </li>

                        </ul>
                    </nav>

                </div>
            </header>



            <div class="overlay" data-overlay data-search-toggler></div>

        </>
    )
}

export default Navbar