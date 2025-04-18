import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const cardButtonStyle = {
  fontSize: '0.9rem',
  padding: '0.5rem 1rem',
};

export const AdminDashboard = () => {
  return (
    <Container className="mt-3 mt-md-4">
      <h1 className="mb-2 mb-md-3 text-primary fw-bold">Panel de Administración</h1>
      <p className="lead text-secondary mb-3 mb-md-4">Bienvenido. Gestiona los módulos de la aplicación desde aquí.</p>

      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-3">
        <Col>
          <Card className="shadow-sm h-100 border-0">
            <Card.Body className="d-flex flex-column justify-content-between p-3">
              <div>
                <Card.Title className="h6 text-info fw-semibold mb-2">Usuarios</Card.Title>
                <Card.Text className="text-muted small">Administra los usuarios del sistema.</Card.Text>
              </div>
              <Link to="/admin/usuarios" className="btn btn-primary btn-sm mt-3 w-100" style={cardButtonStyle}>
                Ir a Usuarios
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="shadow-sm h-100 border-0">
            <Card.Body className="d-flex flex-column justify-content-between p-3">
              <div>
                <Card.Title className="h6 text-info fw-semibold mb-2">Roles</Card.Title>
                <Card.Text className="text-muted small">Administra roles y permisos.</Card.Text>
              </div>
              <Link to="/admin/roles" className="btn btn-primary btn-sm mt-3 w-100" style={cardButtonStyle}>
                Ir a Roles
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="shadow-sm h-100 border-0">
            <Card.Body className="d-flex flex-column justify-content-between p-3">
              <div>
                <Card.Title className="h6 text-info fw-semibold mb-2">Compañía</Card.Title>
                <Card.Text className="text-muted small">Actualiza la información de la empresa.</Card.Text>
              </div>
              <Link to="/admin/companies" className="btn btn-primary btn-sm mt-3 w-100" style={cardButtonStyle}>
                Ir a Compañía
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="shadow-sm h-100 border-0">
            <Card.Body className="d-flex flex-column justify-content-between p-3">
              <div>
                <Card.Title className="h6 text-info fw-semibold mb-2">Productos</Card.Title>
                <Card.Text className="text-muted small">Gestiona los productos de la plataforma.</Card.Text>
              </div>
              <Link to="/admin/productos" className="btn btn-primary btn-sm mt-3 w-100" style={cardButtonStyle}>
                Ir a Productos
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="shadow-sm h-100 border-0">
            <Card.Body className="d-flex flex-column justify-content-between p-3">
              <div>
                <Card.Title className="h6 text-info fw-semibold mb-2">Categorías</Card.Title>
                <Card.Text className="text-muted small">Administra las categorías de productos.</Card.Text>
              </div>
              <Link to="/admin/categorias" className="btn btn-primary btn-sm mt-3 w-100" style={cardButtonStyle}>
                Ir a Categorías
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};