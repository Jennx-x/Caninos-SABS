import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form, Alert } from 'react-bootstrap';
import {
  getProducts,
  postProducts,
  updateProduct,
  deleteProduct,
} from '../services/product.service';
import { getCategories } from '../services/categories.service';

const styles = {
  table: {
    width: '100%',
  },
  longTextCell: {
    maxWidth: '150px', 
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  imageUrlCell: {
    maxWidth: '100px', 
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  actionsCell: {
    width: '120px', 
  },
};

export const ProductsAdmin = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  const [currentProduct, setCurrentProduct] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    categoryId: '',
    imageUrl: '', 
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [errorCategories, setErrorCategories] = useState(null);

  useEffect(() => {
    fetchProducts();
    fetchCategoriesData();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getProducts();
      console.log("Data recibida en ProductsAdmin:", response);
      if (Array.isArray(response)) {
        setProducts(response);
      } else if (response && Array.isArray(response.data)) {
        setProducts(response.data);
      } else if (response && Array.isArray(response.products)) {
        setProducts(response.products);
      } else {
        setError('Error: Los datos de productos recibidos no son un array en el formato esperado.');
        setProducts([]);
      }
    } catch (err) {
      setError(err.message || 'Error al cargar productos');
    } finally {
      setLoading(false);
    }
  };

  const fetchCategoriesData = async () => {
    setLoadingCategories(true);
    setErrorCategories(null);
    try {
      const response = await getCategories();
      if (Array.isArray(response)) {
        setCategories(response);
      } else if (response && Array.isArray(response.data)) {
        setCategories(response.data);
      } else if (response && Array.isArray(response.categories)) {
        setCategories(response.categories);
      } else {
        setErrorCategories('Error: Los datos de categorías recibidos no son un array en el formato esperado.');
        setCategories([]);
      }
    } catch (err) {
      setErrorCategories(err.message || 'Error al cargar categorías');
    } finally {
      setLoadingCategories(false);
    }
  };

  const openCreateModal = () => {
    setModalMode('create');
    setCurrentProduct({ name: '', description: '', price: '', stock: '', categoryId: '', imageUrl: '' }); 
    setShowModal(true);
  };

  const openEditModal = (product) => {
    setModalMode('edit');
    setCurrentProduct({ ...product, imageUrl: product.imageUrl || '' }); 
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (modalMode === 'create') {
      try {
        await postProducts(currentProduct);
        fetchProducts();
        closeModal();
      } catch (err) {
        setError(err.message || 'Error al crear producto');
      }
    } else if (modalMode === 'edit') {
      try {
        await updateProduct(currentProduct.id, currentProduct);
        fetchProducts();
        closeModal();
      } catch (err) {
        setError(err.message || 'Error al actualizar producto');
      }
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      try {
        await deleteProduct(id);
        fetchProducts();
      } catch (err) {
        setError(err.message || 'Error al eliminar producto');
      }
    }
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Sin Categoría';
  };

  if (loading || loadingCategories) {
    return <Container className="mt-5">Cargando productos ...</Container>;
  }

  if (error || errorCategories) {
    return <Container className="mt-5">
      <Alert variant="danger">{error || errorCategories}</Alert>
    </Container>;
  }

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Gestión de Productos</h2>
      <Button variant="primary" className="mb-3" onClick={openCreateModal}>
        Crear Nuevo Producto
      </Button>
      <Table striped bordered hover style={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th style={styles.longTextCell}>Nombre</th>
            <th style={styles.longTextCell}>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoría</th>
            <th style={styles.imageUrlCell}>URL Imagen</th> 
            <th style={styles.actionsCell}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td style={styles.longTextCell}>{product.name}</td>
              <td style={styles.longTextCell}>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{getCategoryName(product.categoryId)}</td>
              <td style={styles.imageUrlCell}>{product.imageUrl}</td> 
              <td style={styles.actionsCell}>
                <div className="d-flex gap-2" style={{ flexWrap: 'nowrap' }}>
                  <Button variant="info" size="sm" style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }} onClick={() => openEditModal(product)}>Editar</Button>
                  <Button variant="danger" size="sm" style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }} onClick={() => handleDelete(product.id)}>Eliminar</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={closeModal} size="lg"> 
        <Modal.Header closeButton>
          <Modal.Title>{modalMode === 'create' ? 'Crear Nuevo Producto' : 'Editar Producto'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" name="name" value={currentProduct.name} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" name="description" value={currentProduct.description} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="number" name="price" value={currentProduct.price} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Stock</Form.Label>
              <Form.Control type="number" name="stock" value={currentProduct.stock} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                as="select"
                name="categoryId"
                value={currentProduct.categoryId}
                onChange={handleInputChange}
                required
              >
                <option value="">Seleccionar Categoría</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>URL Imagen</Form.Label>
              <Form.Control
                type="url"
                name="imageUrl"
                value={currentProduct.imageUrl}
                onChange={handleInputChange}
              />
              <Form.Text className="text-muted">
                Introduce la URL de la imagen del producto.
              </Form.Text>
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