import React from 'react';
import { Nav, NavItem, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export const Sidebar = () => {
  return (
    <div className="bg-light text-dark p-3 d-flex flex-column vh-100">
      <h5 className="mb-4 text-info fw-semibold">
        <Link 
          to="/admin" 
          className="text-info text-decoration-none d-block p-2 rounded"
          style={{ ':hover': { backgroundColor: 'rgba(13, 202, 240, 0.1)' } }}
        >
          Panel de Control
        </Link>
      </h5>
      <Nav className="flex-column flex-grow-1">
        <NavItem>
          <NavLink
            as={Link}
            to="/admin/usuarios"
            className="nav-link-dark mb-2 rounded-pill p-2"
            activeClassName="bg-info text-white fw-bold">
            <i className="bi bi-people me-2"></i> Usuarios
          </NavLink>
        </NavItem>
        <hr className="text-muted my-2" />
        <NavItem>
          <NavLink
            as={Link}
            to="/admin/roles"
            className="nav-link-dark mb-2 rounded-pill p-2"
            activeClassName="bg-info text-white fw-bold" >
            <i className="bi bi-shield-lock me-2"></i> Roles
          </NavLink>
        </NavItem>
        <hr className="text-muted my-2" />
        <NavItem>
          <NavLink
            as={Link}
            to="/admin/companies"
            className="nav-link-dark mb-2 rounded-pill p-2"
            activeClassName="bg-info text-white fw-bold">
            <i className="bi bi-building me-2"></i> Compañía
          </NavLink>
        </NavItem>
        <hr className="text-muted my-2" />
        <NavItem>
          <NavLink
            as={Link}
            to="/admin/productos"
            className="nav-link-dark mb-2 rounded-pill p-2"
            activeClassName="bg-info text-white fw-bold">
            <i className="bi bi-box-seam me-2"></i> Productos
          </NavLink>
        </NavItem>
        <hr className="text-muted my-2" />
        <NavItem>
          <NavLink
            as={Link}
            to="/admin/categorias"
            className="nav-link-dark mb-2 rounded-pill p-2"
            activeClassName="bg-info text-white fw-bold">
            <i className="bi bi-tags me-2"></i> Categorías
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};