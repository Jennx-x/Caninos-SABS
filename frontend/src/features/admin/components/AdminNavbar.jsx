import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../auth/services/auth.service'; // Asegúrate de la ruta correcta

const AdminNavbar = () => {
  const navigate = useNavigate();
  // Aquí deberías tener acceso al nombre del usuario autenticado
  // Esto podría venir de un estado global (Redux, Context API) o de una función
  // que lo obtenga del almacenamiento local o de tu servicio de autenticación.
  const fullName = localStorage.getItem('fullName') || 'Usuario'; // Ejemplo básico

  const handleLogout = () => {
    logout(); // Llama a tu servicio de cierre de sesión
    navigate('/login'); // Redirige a la página de inicio de sesión
  };

  return (
    <Navbar bg="light" variant="light" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand>
          <span className="fw-bold text-primary">Panel de Administración</span>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="align-items-center">
            <span className="me-3">Bienvenido, <span className="fw-semibold">{fullName}</span></span>
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