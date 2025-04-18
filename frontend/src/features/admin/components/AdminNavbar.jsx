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

  const goToDashboard = () => {
    navigate('/admin'); 
  };

  return (
    <Navbar expand="md" bg="light" variant="light" className="shadow-sm sticky-top">
      <Container fluid className="px-3 px-md-4">
        <Navbar.Brand
          className="fw-bold text-primary"
          onClick={goToDashboard} 
          style={{ cursor: 'pointer' }} 
        >
          Panel de Administración
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
            <span className="me-2 me-md-3 text-secondary small">
              Bienvenid@, <span className="fw-semibold text-dark">{fullName}</span>
            </span>
            <Button
              variant="outline-danger"
              onClick={handleLogout}
              size="sm"
              className="ms-2 ms-md-3"
            >
              Cerrar Sesión
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminNavbar;