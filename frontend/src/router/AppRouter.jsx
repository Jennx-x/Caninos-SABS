import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Importa tus componentes de página desde sus respectivas features
import HomePage from '../features/home/pages/HomePage';
import AboutUsPage from '../features/about-us/pages/AboutUsPage';
import ProductsPage from '../features/products/pages/ProductsPage';
import CategoriesPage from '../features/categories/pages/CategoriesPage';
import LoginPage from '../features/auth/pages/LoginPage';
import AdminDashboard from '../features/admin/pages/AdminDashboard';
import ProductsAdmin from '../features/admin/pages/ProductsAdmin';
import { UsersAdmin } from '../features/admin/pages/UsersAdmin';
import { RolesAdmin } from '../features/admin/pages/RolesAdmin';
import { CompaniesPage } from '../features/companies/pages/CompaniesPage';

// Importa el servicio de autenticación
import { isAuthenticated } from '../features/auth/services/auth.service';

// Componente para proteger rutas privadas
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas Públicas (Landing Page) */}
        <Route path="/" element={<HomePage />} />
        <Route path="/quienes-somos" element={<AboutUsPage />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/categorias" element={<CategoriesPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Rutas Privadas (Sistema Administrativo) */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/productos"
          element={
            <PrivateRoute>
              <ProductsAdmin />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/usuarios"
          element={
            <PrivateRoute>
              <UsersAdmin />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/roles"
          element={
            <PrivateRoute>
              <RolesAdmin />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/companies"
          element={
            <PrivateRoute>
              <CompaniesAdmin />
            </PrivateRoute>
          }
        />
        {/* Agrega aquí más rutas privadas según tus necesidades */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;