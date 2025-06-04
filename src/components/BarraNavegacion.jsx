/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-light">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/servicios" className="nav-link text-light">
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link text-light">
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/acercade" className="nav-link text-light">
                Acerca de
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/noticia" className="nav-link text-light">
                Noticia
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/useState" className="nav-link text-light">
                UseState
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
