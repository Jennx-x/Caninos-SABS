import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Sidebar } from '../shared/components/Sidebar';
import { Outlet } from 'react-router-dom';

export const AdminLayout = () => {
  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col md={3} className="bg-light p-0">
          <Sidebar />
        </Col>
        <Col md={9} className="p-4">
          <Outlet /> 
        </Col>
      </Row>
    </Container>
  );
};