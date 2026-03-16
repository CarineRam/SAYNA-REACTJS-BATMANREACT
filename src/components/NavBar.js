import React from 'react';
import logohome from '../assets/logos/logohome.png';
import '../styles/navbar.css';
import { NavLink } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function NavBar() {
    const {user} = UserAuth();
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
            <NavLink to="/" className="navbar-brand">
                <img src={logohome} alt=""/>
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <NavLink to="home" className="nav-link" aria-current="page" >HOME</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="game" className="nav-link"  >GAME</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="eshop" className="nav-link" >ESHOP</NavLink>
                    </li>

                    {
                        user ? (<li className="nav-item">
                            <NavLink to="compte"  className="nav-link" >MON COMPTE</NavLink>
                    </li>) : (<div>
                        <button className=''>
                            <NavLink to='login' className='navbar-link-account'>
                            Connexion
                            </NavLink>
                        </button>
                        <button className='ms-3'>
                            <NavLink to='signup' className='navbar-link-account'>
                            Inscription
                            </NavLink>
                            </button>
                    </div>)
                    }
                    
                   
                </ul>
            </div>
            </div>
    </nav>
  )
}

export default NavBar;
