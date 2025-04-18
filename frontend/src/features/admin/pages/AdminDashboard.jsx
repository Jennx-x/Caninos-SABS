import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const cardButtonStyle = {
  fontSize: '0.9rem', 
  padding: '0.5rem 1rem', 
};

export const AdminDashboard = () => {
  return (
    <Container className="mt-5">
      <h1 className="mb-4 text-primary">Panel de Administración</h1>
      <p className="lead text-secondary">Bienvenido al panel de administración. Desde aquí, puedes gestionar los diferentes módulos de la aplicación.</p>

      <Row xs={1} md={2} lg={3} className="g-4">
        <Col>
          <Card className="shadow-sm h-100">
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title className="h5 text-info mb-2">Usuarios</Card.Title>
                <Card.Text className="text-muted small">Gestionar usuarios del sistema.</Card.Text>
              </div>
              <Link to="/admin/usuarios" className="btn btn-primary btn-sm mt-3" style={cardButtonStyle}>
                Ir a Usuarios
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="shadow-sm h-100">
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title className="h5 text-info mb-2">Roles</Card.Title>
                <Card.Text className="text-muted small">Administrar roles y permisos.</Card.Text>
              </div>
              <Link to="/admin/roles" className="btn btn-primary btn-sm mt-3" style={cardButtonStyle}>
                Ir a Roles
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="shadow-sm h-100">
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title className="h5 text-info mb-2">Compañía</Card.Title>
                <Card.Text className="text-muted small">Actualizar información de la empresa.</Card.Text>
              </div>
              <Link to="/admin/companies" className="btn btn-primary btn-sm mt-3" style={cardButtonStyle}>
                Ir a Compañía
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="shadow-sm h-100">
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title className="h5 text-info mb-2">Productos</Card.Title>
                <Card.Text className="text-muted small">Gestionar productos de la plataforma.</Card.Text>
              </div>
              <Link to="/admin/productos" className="btn btn-primary btn-sm mt-3" style={cardButtonStyle}>
                Ir a Productos
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="shadow-sm h-100">
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title className="h5 text-info mb-2">Categorías</Card.Title>
                <Card.Text className="text-muted small">Administrar categorías de productos y servicios.</Card.Text>
              </div>
              <Link to="/admin/categorias" className="btn btn-primary btn-sm mt-3" style={cardButtonStyle}>
                Ir a Categorías
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};