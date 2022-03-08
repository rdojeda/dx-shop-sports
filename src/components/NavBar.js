import React, {useContext } from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css";

import { CartWidget } from './CartWidget';

import { CartContext } from '../Context/Context';

export const NavBar = () => {
  const { cartCount } = useContext(CartContext)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <h1 className='h5'>
              <i className="fas fa-running mx-3"></i>
              DX Shop Sports
            </h1>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category/Zapatillas">
                  Zapatillas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category/Remeras">
                  Remeras
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category/Camperas">
                  Camperas
                </NavLink>
              </li>
            </ul>
            <ul className="d-flex">
              <li className="nav-item me-2">
                <NavLink className="nav-link" to="/cart">
                  <CartWidget />
                  
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );

};


