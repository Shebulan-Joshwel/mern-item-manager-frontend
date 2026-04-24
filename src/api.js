import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "https://mern-item-manager-backend-ldzk.onrender.com";

export const getItems = async () => {
  const res = await axios.get(`${API_URL}/items`);
  return res.data;
};

export const createItem = async (item) => {
  const res = await axios.post(`${API_URL}/items`, item);
  return res.data;
};

export const deleteItem = async (id) => {
  const res = await axios.delete(`${API_URL}/items/${id}`);
  return res.data;
};
