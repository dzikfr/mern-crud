import { connectDB } from '../database/dbV1.js';

export async function userModelV1() {
  const db = await connectDB();
  return db.collection('products');
}