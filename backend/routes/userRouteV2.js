import express from "express";
import { getUsersV2, getUserByIdV2, saveUserV2, updateUserV2, deleteUserV2 } from "../controller/userControllerV2.js";
const router2 = express.Router();

router2.get('/users/apiv2', getUsersV2);
router2.get('/users/apiv2/:id', getUserByIdV2);
router2.post('/users/apiv2', saveUserV2);
router2.patch('/users/apiv2/:id', updateUserV2);
router2.delete('/users/apiv2/:id', deleteUserV2);

export default router2;