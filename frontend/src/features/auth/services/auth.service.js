import axios from "axios";
const path = import.meta.env.VITE_MAIN_PATH;

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${path}/login`, credentials);
    console.log('Respuesta del Login:', response.data); // <--- Agrega esto
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('fullName', response.data.fullName);
    console.log('fullName guardado en localStorage:', localStorage.getItem('fullName')); // <--- Agrega esto
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const isAuthenticated = () => {
  // Lógica para verificar si el usuario está autenticado
  const token = localStorage.getItem('token');
  return !!token;
};

export const logout = () => {
  // Lógica para cerrar la sesión
  localStorage.removeItem('token');
  localStorage.removeItem('fullName');
  // Puedes agregar aquí cualquier otra lógica de limpieza necesaria (ej: limpiar cookies, resetear estados globales, etc.)
};