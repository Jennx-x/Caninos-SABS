import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const AdminDashboard = () => {
  return (
    <Container className="mt-5">
      <h1 className="mb-4">Panel de Administración</h1>
      <p className="lead">Bienvenido al panel de administración. Desde aquí, puedes gestionar los diferentes módulos de la aplicación.</p>

      <Row xs={1} md={2} lg={3} className="g-4">
        <Col>
          <Card className="shadow-sm">
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div>
                <Card.Title className="h5">Usuarios</Card.Title>
                <Card.Text className="text-muted">Gestionar usuarios del sistema.</Card.Text>
              </div>
              <Link to="/admin/usuarios" className="btn btn-primary btn-sm">Ir a Usuarios</Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="shadow-sm">
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div>
                <Card.Title className="h5">Roles</Card.Title>
                <Card.Text className="text-muted">Administrar roles y permisos.</Card.Text>
              </div>
              <Link to="/admin/roles" className="btn btn-primary btn-sm">Ir a Roles</Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="shadow-sm">
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div>
                <Card.Title className="h5">Compañía</Card.Title>
                <Card.Text className="text-muted">Actualizar información de la empresa.</Card.Text>
              </div>
              <Link to="/admin/companies" className="btn btn-primary btn-sm">Ir a Compañía</Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="shadow-sm">
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div>
                <Card.Title className="h5">Productos</Card.Title>
                <Card.Text className="text-muted">Gestionar productos de la plataforma.</Card.Text>
              </div>
              <Link to="/admin/productos" className="btn btn-primary btn-sm">Ir a Productos</Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="shadow-sm">
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div>
                <Card.Title className="h5">Categorías</Card.Title>
                <Card.Text className="text-muted">Administrar categorías de productos y servicios.</Card.Text>
              </div>
              <Link to="/admin/categorias" className="btn btn-primary btn-sm">Ir a Categorías</Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Puedes agregar más módulos aquí */}
      </Row>
    </Container>
  );
};