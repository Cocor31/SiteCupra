import React from 'react';

import Logo from "@/Assets/Images/Logo_Cupra.png";
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <img src={Logo} alt="logo du header" />
            <nav>
                <NavLink to="/home" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid #a06d3d" } : { borderBottom: "unset" }}  >Accueil</NavLink>
                <NavLink to="/contact" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid #a06d3d" } : { borderBottom: "unset" }}  >Contact</NavLink>
            </nav>
        </header>
    );
};

export default Header;