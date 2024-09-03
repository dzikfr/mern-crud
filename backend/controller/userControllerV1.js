import { getDB } from '../database/dbV1';
import { ObjectId } from 'mongodb';

export const getUsersV1 = async (req, res) => {
    try {
        const db = getDB();
        const users = await db.collection('users').find().toArray();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserByIdV1 = async (req, res) => {
    try {
        const db = getDB();
        const user = await db.collection('users').findOne({ _id: new ObjectId(req.params.id) });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const saveUserV1 = async (req, res) => {
    try {
        const db = getDB();
        const user = req.body;
        const result = await db.collection('users').insertOne(user);
        res.status(201).json(result.ops[0]);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateUserV1 = async (req, res) => {
    try {
        const db = getDB();
        const result = await db.collection('users').updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
        );
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteUserV1 = async (req, res) => {
    try {
        const db = getDB();
        const result = await db.collection('users').deleteOne({ _id: new ObjectId(req.params.id) });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};