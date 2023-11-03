import React from 'react';
import { NavLink } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className='sectionError'>
            <h1>404</h1>
            <p>Désolé page introuvable</p>
            <NavLink to="/home" className="navlink" >Revenir à l'acceuil</NavLink>
        </div>
    );
};

export default Error404;