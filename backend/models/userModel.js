import mongoose, { mongo } from "mongoose";

const User = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        required: true
    }
})

export default mongoose.model('User', User);