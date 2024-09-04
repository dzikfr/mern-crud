import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoute1 from "./routes/userRouteV1.js";
import userRoute2 from "./routes/userRouteV2.js";

const app = express();

mongoose.connect('mongodb://localhost:27017/mern_crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database berhasil tersambung'));

app.use(cors());
app.use(express.json());

app.use('/api/v2', userRoute2);
app.use('/api/v1', userRoute1);

app.listen(5000, () => console.log('Server sedang berjalan'));