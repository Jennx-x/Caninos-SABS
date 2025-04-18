import React, { useState } from 'react';
import { Nav, NavItem, NavLink, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`bg-light text-dark d-none d-md-flex flex-column p-3`}
      style={{
        width: isCollapsed ? '65px' : '200px',
        minHeight: '100vh',
        transition: 'width 0.3s ease-in-out',
        overflowX: 'hidden',
        boxShadow: 'none', 
        backgroundColor: 'white', 
      }}
    >
      <div className="d-flex justify-content-end mb-3">
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={toggleCollapse}
          className="rounded-circle p-1"
        >
          {isCollapsed ? '☰' : '×'}
        </Button>
      </div>

      <Link to="/admin" className="text-decoration-none mb-3">
        <h5
          className="text-info fw-semibold border-bottom pb-2 mb-0"
          style={{ display: isCollapsed ? 'none' : 'block' }}
        >
          Panel
        </h5>
      </Link>

      <Nav className="flex-column flex-grow-1">
        {[
          { to: '/admin/usuarios', label: 'Usuarios' },
          { to: '/admin/roles', label: 'Roles' },
          { to: '/admin/companies', label: 'Compañías' },
          { to: '/admin/productos', label: 'Productos' },
          { to: '/admin/categorias', label: 'Categorías' },
        ].map((item, idx) => (
          <React.Fragment key={item.to}>
            <NavItem className="mb-2">
              <NavLink
                as={Link}
                to={item.to}
                className={`nav-link-dark rounded ${isCollapsed ? 'p-2 text-center' : 'p-2'}`}
              >
                <span style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  {item.label}
                </span>
              </NavLink>
            </NavItem>
            {idx < 4 && (
              <hr className="text-muted my-2" style={{ display: isCollapsed ? 'none' : 'block' }} />
            )}
          </React.Fragment>
        ))}
      </Nav>
    </div>
  );
};