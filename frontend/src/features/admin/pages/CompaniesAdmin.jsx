import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form, Alert } from 'react-bootstrap';
import { getCompanies, postCompanies, updateCompany, deleteCompany } from '../services/companies.service';

export const CompaniesAdmin = () => {
  const [companies, setCompanies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('create'); // 'create' or 'edit'
  const [currentCompany, setCurrentCompany] = useState({ name: '', nit: '', address: '' }); // Añadido 'nit' al estado inicial
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
    setCurrentCompany({ name: '', nit: '', address: '' }); // Añadido 'nit' al estado inicial del modal de creación
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
    return <Container className="mt-5">Cargando compañías...</Container>;
  }

  if (error) {
    return <Container className="mt-5"><Alert variant="danger">{error}</Alert></Container>;
  }

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Gestión de Compañías</h2>
      <Button variant="primary" className="mb-3" onClick={openCreateModal}>
        Crear Nueva Compañía
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre de la Compañía</th>
            <th>NIT</th>
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {companies.map(company => (
            <tr key={company.id}>
              <td>{company.id}</td>
              <td>{company.name}</td>
              <td>{company.nit}</td>
              <td>{company.address}</td>
              <td>
                <div className="d-flex gap-2">
                  <Button variant="info" size="sm" onClick={() => openEditModal(company)}>Editar</Button>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(company.id)}>Eliminar</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
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