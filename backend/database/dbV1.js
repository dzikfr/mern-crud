import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'mern_crud_v1';

let db = null;

export async function connectDB() {
  if (db) return db;

  const client = new MongoClient(url, { useUnifiedTopology: true });
  await client.connect();
  db = client.db(dbName);
  return db;
}