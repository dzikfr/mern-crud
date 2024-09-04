import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1';

export const getProducts = () => axios.get(API_URL);
export const getProductById = (id) => axios.get(`${API_URL}/${id}`);
export const createProduct = (user) => axios.post(API_URL, user);
export const updateProduct= (id, user) => axios.patch(`${API_URL}/${id}`, user);
export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);