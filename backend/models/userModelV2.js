import mongoose, { mongo } from "mongoose";

const userModelV2 = mongoose.Schema({
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

export default mongoose.model('userModelV2', userModelV2);