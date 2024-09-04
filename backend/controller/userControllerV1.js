import { userModelV1 } from '../models/userModelV1.js';

export async function getAllProductsV1(req, res) {
  try {
    const products = await (await userModelV1()).find().toArray();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getProductByIdV1(req, res) {
  try {
    const id = req.params.id;
    const product = await (await userModelV1()).findOne({ _id: new ObjectId(id) });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createProductV1(req, res) {
  try {
    const { name, price, stock } = req.body;
    const result = await (await userModelV1()).insertOne({ name, price, stock });
    res.status(201).json(result.ops[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateProductV1(req, res) {
  try {
    const id = req.params.id;
    const { name, price, stock } = req.body;
    const result = await (await userModelV1()).updateOne(
      { _id: new ObjectId(id) },
      { $set: { name, price, stock } }
    );
    if (result.matchedCount === 0) return res.status(404).json({ error: 'Product not found' });
    res.status(200).json({ message: 'Product updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteProductV1(req, res) {
  try {
    const id = req.params.id;
    const result = await (await userModelV1()).deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) return res.status(404).json({ error: 'Product not found' });
    res.status(200).json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
