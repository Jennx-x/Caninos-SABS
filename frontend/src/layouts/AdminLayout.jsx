import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Sidebar } from '../shared/components/Sidebar';
import { Outlet } from 'react-router-dom';
import AdminNavbar from '../features/admin/components/AdminNavbar';

export const AdminLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col
          md={3}
          className={`bg-light p-0 shadow-sm ${isSidebarCollapsed ? 'd-none d-md-block' : ''}`}
          style={{
            width: isSidebarCollapsed ? '65px' : '200px',
            transition: 'width 0.3s ease-in-out',
          }}
        >
          <Sidebar isCollapsed={isSidebarCollapsed} toggleCollapse={toggleSidebar} />
        </Col>

        <Col
          md={isSidebarCollapsed ? 12 : 9}
          className="p-0 d-flex flex-column"
        >
          <AdminNavbar toggleSidebar={toggleSidebar} isSidebarCollapsed={isSidebarCollapsed} />

          <Container fluid className="p-4 flex-grow-1 overflow-auto">
            <Outlet />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};