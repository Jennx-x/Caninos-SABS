import React from 'react';
import { Link } from 'react-router-dom';

export const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/logo.png1.png" // 
            alt="Caninos SABS Logo"
            width="40"
            height="40"
            className="me-2"
          />
          <span className="fw-bold text-primary fs-4">Caninos SABS</span>
        </Link>

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

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <Link className="nav-link text-dark" to="/">Inicio</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-dark" to="/quienes-somos">Quiénes Somos</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-dark" to="/productos">Nuestros Productos</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-dark" to="/categorias">Nuestras Categorías</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-primary fw-bold" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
