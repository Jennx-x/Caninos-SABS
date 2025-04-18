import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import { HomePage } from '../features/landingPage/pages/HomePage';
import { AboutUsPage } from '../features/landingPage/pages/AboutUsPage';
import { ProductsPage } from '../features/landingPage/pages/ProductsPage';
import { CategoriesPage as PublicCategoriesPage } from '../features/landingPage/pages/CategoriesPage'; 
import { LoginPage } from '../features/auth/pages/LoginPage';


import { AdminDashboard } from '../features/admin/pages/AdminDashboard';
import { ProductsAdmin } from '../features/admin/pages/ProductsAdmin';
import { UsersAdmin } from '../features/admin/pages/UsersAdmin';
import { RolesAdmin } from '../features/admin/pages/RolesAdmin';
import { CompaniesAdmin } from '../features/admin/pages/CompaniesAdmin';
import { CategoriesAdmin as AdminCategoriesAdmin } from '../features/admin/pages/CategoriesAdmin'; 


import { isAuthenticated } from '../features/auth/services/auth.service';


import { AdminLayout } from '../layouts/AdminLayout';


import { NavigationBar } from '../shared/components/NavigationBar';


const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

const AppRouter = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <NavigationBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quienes-somos" element={<AboutUsPage />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/categorias" element={<PublicCategoriesPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/admin" element={<PrivateRoute><AdminLayout /></PrivateRoute>}>
          <Route index element={<AdminDashboard />} /> 
          <Route path="usuarios" element={<UsersAdmin />} />
          <Route path="roles" element={<RolesAdmin />} />
          <Route path="companies" element={<CompaniesAdmin />} />
          <Route path="productos" element={<ProductsAdmin />} />
          <Route path="categorias" element={<AdminCategoriesAdmin />} /> 
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;