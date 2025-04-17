import axios from "axios";
const path = import.meta.env.VITE_MAIN_PATH;

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${path}/login`, credentials);
    // Si el login es exitoso, guarda el token (o lo que uses para autenticar)
    localStorage.setItem('token', response.data.token); // Ejemplo
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const isAuthenticated = () => {
  // TU LÓGICA PARA VERIFICAR SI EL USUARIO ESTÁ AUTENTICADO
  // Ejemplo: verificar si hay un token en localStorage
  const token = localStorage.getItem('token');
  return !!token;
};