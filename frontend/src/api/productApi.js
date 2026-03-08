import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/v1"
});

export const fetchProducts = async (page, search) => {
  const res = await API.get(`/products?page=${page}&search=${search}`);
  return res.data;
};

export const fetchProductById = async (id) => {
  const res = await API.get(`/products/${id}`);
  return res.data;
};


// Why this is good:

// Centralized API

// Easy to scale

// Clean separation