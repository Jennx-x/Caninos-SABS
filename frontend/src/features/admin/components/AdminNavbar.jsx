import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../auth/services/auth.service'; 

const AdminNavbar = () => {
  const navigate = useNavigate();
  const fullName = localStorage.getItem('fullName') || 'Usuario'; 

  const handleLogout = () => {
    logout(); 
    navigate('/login'); 
  };

  return (
    <Navbar bg="light" variant="light" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand>
          <span className="fw-bold text-primary">Panel de Administración</span>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="align-items-center">
            <span className="me-3">Bienvenid@, <span className="fw-semibold">{fullName}</span></span>
            <Button variant="outline-danger" onClick={handleLogout}>
              Cerrar Sesión
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminNavbar;