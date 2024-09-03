import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'mern_crud_v1';
let db;

export const connectDB = async () => {
    try {
        const client = new MongoClient(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await client.connect();
        db = client.db(dbName);
        console.log('Connected to MongoDB (Native Driver)');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
};

export const getDB = () => db;