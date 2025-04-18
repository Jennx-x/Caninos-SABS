import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form, Alert } from 'react-bootstrap';
import {
    getCategories,
    postCategories,
    updateCategory,
    deleteCategory,
} from '../services/categories.service';

export const CategoriesAdmin = () => {
    const [categories, setCategories] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState('create');
    const [currentCategory, setCurrentCategory] = useState({ name: '', description: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await getCategories(); 
            console.log("Data recibida en CategoriesAdmin:", response); 

            if (Array.isArray(response)) {
                setCategories(response);
            } else if (response && Array.isArray(response.data)) {
                setCategories(response.data); 
            } else if (response && Array.isArray(response.categories)) {
                setCategories(response.categories); 
            }
        } catch (err) {
            setError(err.message || 'Error al cargar categorías');
        } finally {
            setLoading(false);
        }
    };

    const openCreateModal = () => {
        setModalMode('create');
        setCurrentCategory({ name: '', description: '' });
        setShowModal(true);
    };

    const openEditModal = (category) => {
        setModalMode('edit');
        setCurrentCategory({ ...category });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentCategory((prevCategory) => ({ ...prevCategory, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (modalMode === 'create') {
            try {
                await postCategories(currentCategory);
                fetchCategories();
                closeModal();
            } catch (err) {
                setError(err.message || 'Error al crear categoría');
            }
        } else if (modalMode === 'edit') {
            try {
                await updateCategory(currentCategory.id, currentCategory);
                fetchCategories();
                closeModal();
            } catch (err) {
                setError(err.message || 'Error al actualizar categoría');
            }
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar esta categoría?')) {
            try {
                await deleteCategory(id);
                fetchCategories();
            } catch (err) {
                setError(err.message || 'Error al eliminar categoría');
            }
        }
    };

    if (loading) {
        return <Container className="mt-5">Cargando categorías...</Container>;
    }

    if (error) {
        return <Container className="mt-5">
            <Alert variant="danger">{error}</Alert>
        </Container>;
    }

    return (
        <Container className="mt-5">
            <h2 className="mb-4">Gestión de Categorías</h2>
            <Button variant="primary" className="mb-3" onClick={openCreateModal}>
                Crear Nueva Categoría
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td>{category.description}</td>
                            <td>
                                <div className="d-flex gap-2">
                                    <Button variant="info" size="sm" onClick={() => openEditModal(category)}>Editar</Button>
                                    <Button variant="danger" size="sm" onClick={() => handleDelete(category.id)}>Eliminar</Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalMode === 'create' ? 'Crear Nueva Categoría' : 'Editar Categoría'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={currentCategory.name}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="description"
                                value={currentCategory.description}
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