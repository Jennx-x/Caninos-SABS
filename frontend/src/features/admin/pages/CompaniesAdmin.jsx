import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form, Alert, Row, Col } from 'react-bootstrap';
import { getCompanies, postCompanies, updateCompany, deleteCompany } from '../services/companies.service';

export const CompaniesAdmin = () => {
  const [companies, setCompanies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  const [currentCompany, setCurrentCompany] = useState({ id: null, name: '', nit: '', address: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getCompanies();
      setCompanies(data);
    } catch (err) {
      setError(err.message || 'Error al cargar compañías');
    } finally {
      setLoading(false);
    }
  };

  const openCreateModal = () => {
    setModalMode('create');
    setCurrentCompany({ id: null, name: '', nit: '', address: '' });
    setShowModal(true);
  };

  const openEditModal = (company) => {
    setModalMode('edit');
    setCurrentCompany({ ...company });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentCompany(prevCompany => ({ ...prevCompany, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (modalMode === 'create') {
      try {
        await postCompanies(currentCompany);
        fetchCompanies();
        closeModal();
      } catch (err) {
        setError(err.message || 'Error al crear compañía');
      }
    } else if (modalMode === 'edit') {
      try {
        await updateCompany(currentCompany.id, currentCompany);
        fetchCompanies();
        closeModal();
      } catch (err) {
        setError(err.message || 'Error al actualizar compañía');
      }
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta compañía?')) {
      try {
        await deleteCompany(id);
        fetchCompanies();
      } catch (err) {
        setError(err.message || 'Error al eliminar compañía');
      }
    }
  };

  if (loading) {
    return <Container className="mt-4">Cargando compañías...</Container>;
  }

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row className="mb-3 d-flex justify-content-between align-items-center">
        <Col xs="auto">
          <h2 className="mb-0">Gestión de Compañías</h2>
        </Col>
        <Col xs="auto">
          <Button variant="primary" onClick={openCreateModal}>
            Crear Nueva Compañía
          </Button>
        </Col>
      </Row>

      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre de la Compañía</th>
              <th>NIT</th>
              <th>Dirección</th>
              <th style={{ minWidth: '120px' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {companies.map(company => (
              <tr key={company.id}>
                <td>{company.id}</td>
                <td>{company.name}</td>
                <td>{company.nit}</td>
                <td>{company.address}</td>
                <td className="d-flex gap-2 flex-wrap">
                  <Button variant="info" size="sm" className="mb-1 mb-md-0" onClick={() => openEditModal(company)}>
                    Editar
                  </Button>
                  <Button variant="danger" size="sm" className="mb-1 mb-md-0" onClick={() => handleDelete(company.id)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalMode === 'create' ? 'Crear Nueva Compañía' : 'Editar Compañía'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre de la Compañía</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={currentCompany.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>NIT</Form.Label>
              <Form.Control
                type="text"
                name="nit"
                value={currentCompany.nit}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={currentCompany.address}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {modalMode === 'create' ? 'Crear' : 'Guardar Cambios'}
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};