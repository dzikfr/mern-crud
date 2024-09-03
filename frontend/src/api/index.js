import axios from 'axios';

const API_URL = 'http://localhost:5000/users/apiv2';

export const getUsersV2 = () => axios.get(API_URL);
export const getUserByIdV2 = (id) => axios.get(`${API_URL}/${id}`);
export const saveUserV2 = (user) => axios.post(API_URL, user);
export const updateUserV2 = (id, user) => axios.patch(`${API_URL}/${id}`, user);
export const deleteUserV2 = (id) => axios.delete(`${API_URL}/${id}`);