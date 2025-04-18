import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form, Alert } from 'react-bootstrap';
import { getUsers, postUsers, updateUser, deleteUser } from '../services/users.service';
import { getRoles } from '../services/roles.service';
import { getCompanies } from '../services/companies.service';

export const UsersAdmin = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  const [currentUser, setCurrentUser] = useState({ fullName: '', email: '', password: '', roleId: '', companyId: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const usersData = await getUsers();
      const rolesData = await getRoles();
      const companiesData = await getCompanies();
      setUsers(usersData);
      setRoles(rolesData);
      setCompanies(companiesData);
    } catch (err) {
      setError(err.message || 'Error al cargar usuarios, roles o compañías');
    } finally {
      setLoading(false);
    }
  };

  const getRoleName = (roleId) => {
    const role = roles.find(r => r.id === roleId);
    return role ? role.name : 'Desconocido';
  };

  const getCompanyName = (companyId) => {
    const company = companies.find(c => c.id === companyId);
    return company ? company.name : 'Desconocida';
  };

  const openCreateModal = () => {
    setModalMode('create');
    setCurrentUser({ fullName: '', email: '', password: '', roleId: '', companyId: '' });
    setShowModal(true);
  };

  const openEditModal = (user) => {
    setModalMode('edit');
    setCurrentUser({ ...user });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (modalMode === 'create') {
      try {
        await postUsers(currentUser);
        fetchData();
        closeModal();
      } catch (err) {
        setError(err.message || 'Error al crear usuario');
      }
    } else if (modalMode === 'edit') {
      try {
        await updateUser(currentUser.id, currentUser);
        fetchData();
        closeModal();
      } catch (err) {
        setError(err.message || 'Error al actualizar usuario');
      }
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      try {
        await deleteUser(id);
        fetchData();
      } catch (err) {
        setError(err.message || 'Error al eliminar usuario');
      }
    }
  };

  if (loading) {
    return <Container className="mt-5">Cargando...</Container>;
  }

  if (error) {
    return <Container className="mt-5"><Alert variant="danger">{error}</Alert></Container>;
  }

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Gestión de Usuarios</h2>
      <Button variant="primary" className="mb-3" onClick={openCreateModal}>
        Crear Nuevo Usuario
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre Completo</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Compañía</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{getRoleName(user.roleId)}</td>
              <td>{getCompanyName(user.companyId)}</td>
              <td>
                <div className="d-flex gap-2">
                  <Button variant="info" size="sm" onClick={() => openEditModal(user)}>Editar</Button>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(user.id)}>Eliminar</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalMode === 'create' ? 'Crear Nuevo Usuario' : 'Editar Usuario'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={currentUser.fullName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={currentUser.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            {modalMode === 'create' && (
              <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={currentUser.password}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            )}
            <Form.Group className="mb-3">
              <Form.Label>Rol</Form.Label>
              <Form.Control
                as="select"
                name="roleId"
                value={currentUser.roleId}
                onChange={handleInputChange}
                required
              >
                <option value="">Seleccionar Rol</option>
                {roles.map(role => (
                  <option key={role.id} value={role.id}>{role.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Compañía</Form.Label>
              <Form.Control
                as="select"
                name="companyId"
                value={currentUser.companyId}
                onChange={handleInputChange}
                required
              >
                <option value="">Seleccionar Compañía</option>
                {companies.map(company => (
                  <option key={company.id} value={company.id}>{company.name}</option>
                ))}
              </Form.Control>
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