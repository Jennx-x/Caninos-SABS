// CategoriesPage.jsx
import React from 'react';
import { CategoryList } from '../components/CategoryList';


export const CategoriesPage = () => {
  return (
    <section className="py-5 bg-light" id="categorias">
      <div className="container">
        <h2 className="text-center mb-4">Nuestras Categorías</h2>
        <CategoryList />
      </div>
    </section>
  );
};



