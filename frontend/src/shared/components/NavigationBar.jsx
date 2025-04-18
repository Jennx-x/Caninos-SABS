import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavigationBar = () => {
  return (
    <Navbar expand="lg" bg="white" variant="light" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/logo.png1.png"
            alt="Caninos SABS Logo"
            width="40"
            height="40"
            className="me-2"
          />
          <span className="fw-bold text-primary fs-4">Caninos SABS</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/" className="text-dark mx-2">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/quienes-somos" className="text-dark mx-2">Quiénes Somos</Nav.Link>
            <Nav.Link as={Link} to="/productos" className="text-dark mx-2">Nuestros Productos</Nav.Link>
            <Nav.Link as={Link} to="/categorias" className="text-dark mx-2">Nuestras Categorías</Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-primary fw-bold mx-2">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
