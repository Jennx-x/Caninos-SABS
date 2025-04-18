import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Importa los componentes de página de la Landing Page
import { HomePage } from '../features/landingPage/pages/HomePage';
import { AboutUsPage } from '../features/landingPage/pages/AboutUsPage';
import { ProductsPage } from '../features/landingPage/pages/ProductsPage';
import { CategoriesPage as PublicCategoriesPage } from '../features/landingPage/pages/CategoriesPage'; // Renombrar para evitar conflicto
import { LoginPage } from '../features/auth/pages/LoginPage';

// Importa los componentes de página del Dashboard
import { AdminDashboard } from '../features/admin/pages/AdminDashboard';
import { ProductsAdmin } from '../features/admin/pages/ProductsAdmin';
import { UsersAdmin } from '../features/admin/pages/UsersAdmin';
import { RolesAdmin } from '../features/admin/pages/RolesAdmin';
import { CompaniesAdmin } from '../features/admin/pages/CompaniesAdmin';
import { CategoriesAdmin as AdminCategoriesAdmin } from '../features/admin/pages/CategoriesAdmin'; // Renombrar para evitar conflicto

// Importa el servicio de autenticación
import { isAuthenticated } from '../features/auth/services/auth.service';

// Importa el Layout del Admin
import { AdminLayout } from '../layouts/AdminLayout';

// Importa el componente NavigationBar
import { NavigationBar } from '../shared/components/NavigationBar';

// Componente para proteger rutas privadas
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

const AppRouter = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {/* Renderiza la NavigationBar solo si NO estamos en una ruta de administración */}
      {!isAdminRoute && <NavigationBar />}
      <Routes>
        {/* Rutas Públicas (Landing Page) */}
        <Route path="/" element={<HomePage />} />
        <Route path="/quienes-somos" element={<AboutUsPage />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/categorias" element={<PublicCategoriesPage />} /> {/* Usa el componente renombrado */}
        <Route path="/login" element={<LoginPage />} />

        {/* Rutas Privadas (Sistema Administrativo) */}
        <Route path="/admin" element={<PrivateRoute><AdminLayout /></PrivateRoute>}>
          <Route index element={<AdminDashboard />} /> {/* Página principal del admin */}
          <Route path="usuarios" element={<UsersAdmin />} />
          <Route path="roles" element={<RolesAdmin />} />
          <Route path="companies" element={<CompaniesAdmin />} />
          <Route path="productos" element={<ProductsAdmin />} />
          <Route path="categorias" element={<AdminCategoriesAdmin />} /> {/* Usa el componente renombrado */}
          {/* Agrega aquí más rutas privadas */}
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;