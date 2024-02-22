import header from '/public/header.svg';
import React, {useState} from "react";
import { createBrowserRouter, RouterProvider, NavLink,} from "react-router-dom";

function Header() {
    return (
        <header>
            <div>
                <a href="../home/Home.jsx">
                <img src={header} alt="Logo Kasa" width="100" height="100"/>
                </a>
            </div>
            <Navbar />
        </header>
    )

}

const Navbar = () => {
    const {isOpen, setIsOpen} = useState(false);
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    )
}

export default Header;