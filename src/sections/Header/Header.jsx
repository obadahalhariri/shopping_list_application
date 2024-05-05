import "./Header.css"
import React from 'react'
import { Link } from "react-router-dom"
import { NavItem } from "../../components/index"
import logo from '../../assets/images/logo.jpg'

const Header = () => {
    return (
        <div className="navbar navbar-expand-md navbar-dark header-main">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mainmenu">
                    <ul className="navbar-nav ms-auto">
                        <NavItem><Link to="/" className="nav-link">Get Started</Link></NavItem>
                        <NavItem><Link to="/shoppinglists" className="nav-link">Shopping Lists</Link></NavItem>
                        <NavItem><Link to="/aboutus" className="nav-link">About us</Link></NavItem>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header