import React from 'react';
import { Nav, NavItem, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div className="bg-light text-dark p-3 d-flex flex-column vh-100">
      <Link to="/admin" className="text-decoration-none"> {/* Enlace al Dashboard */}
        <h5 className="mb-4 text-info fw-semibold border-bottom pb-2">Panel de Control</h5>
      </Link>
      <Nav className="flex-column flex-grow-1">
        <NavItem>
          <NavLink
            as={Link}
            to="/admin/usuarios"
            className="nav-link-dark mb-2 rounded-pill p-2"
            activeClassName="bg-info text-white fw-bold"
          >
            <i className="bi bi-people me-2"></i> Usuarios
          </NavLink>
        </NavItem>
        <hr className="text-muted my-2" />
        <NavItem>
          <NavLink
            as={Link}
            to="/admin/roles"
            className="nav-link-dark mb-2 rounded-pill p-2"
            activeClassName="bg-info text-white fw-bold"
          >
            <i className="bi bi-shield-lock me-2"></i> Roles
          </NavLink>
        </NavItem>
        <hr className="text-muted my-2" />
        <NavItem>
          <NavLink
            as={Link}
            to="/admin/companies"
            className="nav-link-dark mb-2 rounded-pill p-2"
            activeClassName="bg-info text-white fw-bold"
          >
            <i className="bi bi-building me-2"></i> Compañía
          </NavLink>
        </NavItem>
        <hr className="text-muted my-2" />
        <NavItem>
          <NavLink
            as={Link}
            to="/admin/productos"
            className="nav-link-dark mb-2 rounded-pill p-2"
            activeClassName="bg-info text-white fw-bold"
          >
            <i className="bi bi-box-seam me-2"></i> Productos
          </NavLink>
        </NavItem>
        <hr className="text-muted my-2" />
        <NavItem>
          <NavLink
            as={Link}
            to="/admin/categorias"
            className="nav-link-dark mb-2 rounded-pill p-2"
            activeClassName="bg-info text-white fw-bold"
          >
            <i className="bi bi-tags me-2"></i> Categorías
          </NavLink>
        </NavItem>
        {/* Puedes añadir más elementos NavItem aquí si es necesario */}
      </Nav>
      {/* Puedes añadir elementos al final del sidebar si lo deseas */}
    </div>
  );
};