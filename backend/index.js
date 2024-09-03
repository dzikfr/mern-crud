import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import userRouteV1 from "./routes/userRouteV1.js";  
// import { connectDB as connectMongoNative } from './database/dbV1.js';
import userRouteV2 from "./routes/userRouteV2.js";

const app = express();

mongoose.connect('mongodb://localhost:27017/mern_crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database berhasil tersambung'));

// connectMongoNative();

app.use(cors());
app.use(express.json());
// app.use(userRouteV2);
// app.use('/api/v1', userRouteV1);
app.use('/api/v2', userRouteV2);

app.listen(5000, () => console.log('Server sedang berjalan'));