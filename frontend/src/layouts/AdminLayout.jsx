import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Sidebar } from '../shared/components/Sidebar';
import { Outlet } from 'react-router-dom';
import AdminNavbar from '../features/admin/components/AdminNavbar';

export const AdminLayout = () => {
  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col md={3} className="bg-light p-0 shadow-sm">
          <Sidebar />
        </Col>
        <Col md={9} className="p-0">
          <AdminNavbar /> 
          <Container fluid className="p-4">
            <Outlet /> 
          </Container>
        </Col>
      </Row>
    </Container>
  );
};