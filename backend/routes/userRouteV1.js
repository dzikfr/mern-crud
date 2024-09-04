import express from 'express';
import { getAllProductsV1, getProductByIdV1, createProductV1, updateProductV1, deleteProductV1 } from '../controller/userControllerV1.js';

const router1 = express.Router();

router1.get('/', getAllProductsV1);
router1.get('/:id', getProductByIdV1);
router1.post('/', createProductV1);
router1.put('/:id', updateProductV1);
router1.delete('/:id', deleteProductV1);

export default router1;