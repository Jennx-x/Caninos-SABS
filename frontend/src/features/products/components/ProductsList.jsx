import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/product.service';
import { Row, Col, Card } from 'react-bootstrap';

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getProducts();
        console.log('DATA RECIBIDA EN ProductsList:', data);
        setProducts(data.products || []);
      } catch (err) {
        setError('Error al cargar los productos.');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center py-5">Cargando...</div>;
  }

  if (error) {
    return <div className="alert alert-danger text-center py-3">{error}</div>;
  }

  if (!products || products.length === 0) {
    return <div className="alert alert-info text-center py-3">No hay productos.</div>;
  }

  return (
    <div className="py-5">
      <h2 className="text-center mb-4 text-info">Nuestros Productos</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {products.map(product => (
          <Col key={product.id}>
            <Card className="shadow-sm h-100">
              <Card.Img
                variant="top"
                src={product.imageUrl || 'https://via.placeholder.com/300x200?text=Sin+Imagen'}
                alt={product.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-primary">{product.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${product.price}</Card.Subtitle>
                <Card.Text className="mb-auto text-secondary">
                  {product.description?.substring(0, 100)}...
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
