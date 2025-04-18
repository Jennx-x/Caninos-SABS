import axios from "axios";
const path = import.meta.env.VITE_MAIN_PATH;

export const postCategories = async (categoryData) => {
  try {
    const response = await axios.post(`${path}/categories`, categoryData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${path}/categories`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCategoryById = async (id) => {
  try {
    const response = await axios.get(`${path}/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateCategory = async (id, updatedData) => {
  try {
    const response = await axios.put(`${path}/categories/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteCategory = async (id) => {
  try {
    const response = await axios.delete(`${path}/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
