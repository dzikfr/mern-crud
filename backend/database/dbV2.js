import mongoose from 'mongoose';

export const connectMongoose = () => {
    mongoose.connect('mongodb://localhost:27017/mern_crud', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;
    db.on('error', (error) => console.log(error));
    db.once('open', () => console.log('Connected to MongoDB (Mongoose)'));
};
