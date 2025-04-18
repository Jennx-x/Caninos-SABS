import React, { useEffect, useState } from 'react';
import { getCategories } from '../services/categories.service';
import { Row, Col, Card, Badge } from 'react-bootstrap';

export const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getCategories()
      .then((data) => {
        console.log("Datos recibidos de getCategories:", data);

        if (Array.isArray(data)) {
          setCategories(data);
        } else if (data && Array.isArray(data.categories)) {
          setCategories(data.categories);
        } else {
          console.error("La respuesta no tiene el formato esperado:", data);
          setError('Formato de respuesta no válido');
        }
      })
      .catch((err) => {
        console.error("Error al cargar las categorías:", err);
        setError('Error al cargar las categorías.');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-center py-5">Cargando categorías...</div>;
  }

  if (error) {
    return <div className="alert alert-danger text-center py-3">{error}</div>;
  }

  if (!categories || categories.length === 0) {
    return <div className="alert alert-info text-center py-3">No hay categorías disponibles.</div>;
  }

  return (
    <div className="py-5">
      
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {categories.map((categoria) => (
          <Col key={categoria.id}>
            <Card className="shadow-sm h-100 border-0">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-primary">{categoria.name}</Card.Title>
                <Card.Text className="text-secondary mb-auto">
                  {categoria.description?.substring(0, 150)}...
                </Card.Text>
              </Card.Body>
              {categoria.tipo && (
                <Card.Footer className="bg-white border-0 text-end">
                  <Badge bg="secondary">{categoria.tipo}</Badge>
                </Card.Footer>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
