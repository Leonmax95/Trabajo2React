import React from 'react'
import { NavBar } from './NavBar'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'
import { Logo } from "./Logo";

const Header = () => {

    return (
        <header className="header">
            <Logo />
            <NavBar />
            <CartWidget />
        </header>
    )
}

export default Header;