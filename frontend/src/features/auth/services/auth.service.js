import axios from "axios";
const path = import.meta.env.VITE_MAIN_PATH;

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${path}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
