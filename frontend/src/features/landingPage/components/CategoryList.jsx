import React, { useEffect, useState } from 'react';
import { getCategories } from '../../admin/services/categories.service';

export const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((data) => {
        console.log("Datos recibidos de getCategories:", data); // <--- LOG 1

        if (Array.isArray(data)) {
          console.log("Los datos son un array:", data); // <--- LOG 2
          setCategories(data);
        } else if (data && Array.isArray(data.categories)) {
          console.log("Los datos tienen la propiedad 'categories' que es un array:", data.categories); // <--- LOG 3
          setCategories(data.categories);
        } else {
          console.error("La respuesta no tiene el formato esperado:", data); // <--- LOG 4
        }
      })
      .catch((error) => {
        console.error("Error al cargar las categorías:", error);
      });
  }, []);

  console.log("Estado 'categories' después del useEffect:", categories); // <--- LOG 5

  if (!Array.isArray(categories)) {
    return <p className="text-danger text-center">Ocurrió un error al mostrar las categorías.</p>;
  }

  if (categories.length === 0) {
    return <p className="text-muted text-center">No hay categorías disponibles.</p>;
  }

  return (
    <div className="row">
      {categories.map((categoria) => {
        console.log("Categoría individual en el map:", categoria); // <--- LOG 6
        return (
          <div key={categoria.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title text-primary">{categoria.name}</h5>
                <p className="card-text">{categoria.description}</p>
              </div>
              <div className="card-footer bg-white border-0 text-end">
                <span className="badge bg-secondary">{categoria.tipo || 'General'}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};