import axios from "axios";
const path = import.meta.env.VITE_MAIN_PATH;

export const postProducts = async (productData) => {
  try {
    const response = await axios.post(`${path}/products`, productData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get(`${path}/products`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${path}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProductByCategoryId = async (categoryId) => {
  try {
    const response = await axios.get(`${path}/products/category/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateProduct = async (id, updatedData) => {
  try {
    const response = await axios.put(`${path}/products/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${path}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};