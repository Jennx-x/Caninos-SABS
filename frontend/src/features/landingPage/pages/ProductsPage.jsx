import React from 'react';
import { Container } from 'react-bootstrap';
import { ProductsList } from '../components/ProductsList';
export const ProductsPage = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4 text-success">Explora Nuestra Selección Canina</h1>
      <ProductsList/>
    </Container>
  );
};

