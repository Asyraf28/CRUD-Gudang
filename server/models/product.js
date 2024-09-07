import mongoose from "mongoose";

const Product = mongoose.Schema({
    product_name:{type: String, required: true},
    category:{type: String, required: true},
    merk:{type: String, required: true},
    price:{type: Number, required: true},
    stock:{type: Number, required: true}
});

export default mongoose.model('Product', Product);