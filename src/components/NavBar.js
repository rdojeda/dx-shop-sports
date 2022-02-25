import { NavLink } from 'react-router-dom';
import "../App.css";

import { CartWidget } from './CartWidget';

export const NavBar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
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
            <NavLink className="navbar-brand" to="/">
              <CartWidget />
            </NavLink>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/zapatillas">
                    Zapatillas
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/remeras">
                    Remeras
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/camperas">
                    Camperas
                  </NavLink>
                </li>
              
              </ul>
            </div>
          </div>
        </nav>
      </>
    );

};


