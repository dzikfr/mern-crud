import userModelV2 from "../models/userModelV2.js";

export const getAllProductsV2 = async (req, res) => {
    try {
        const users = await userModelV2.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getProductByIdV2 = async (req, res) => {
    try {
        const user = await userModelV2.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createProductV2 = async (req, res) => {
    const user = new userModelV2(req.body);
    try {
        const insertedUser = await user.save();
        res.status(201).json(insertedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateProductV2 = async (req, res) => {
    try {
        const updatedUser = await userModelV2.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteProductV2 = async (req, res) => {
    try {
        const deletedUser = await userModelV2.deleteOne({_id:req.params.id});
        res.status(201).json(deletedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}