import express from "express";
import { getAllProductsV2, getProductByIdV2, createProductV2, updateProductV2, deleteProductV2 } from "../controller/userControllerV2.js";
const router2 = express.Router();

router2.get('/', getAllProductsV2);
router2.get('/:id', getProductByIdV2);
router2.post('/', createProductV2);
router2.patch('/:id', updateProductV2);
router2.delete('/:id', deleteProductV2);

export default router2;