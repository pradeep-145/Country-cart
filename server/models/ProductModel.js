const mongoose=require('mongoose')

const ProductSchema=new mongoose.Schema({
    Location: { type: String, required: true },
    name: { type: String, required: true },
    produtDesc: { type: String, required: true },
    produtPrice: { type: Number, required: true },
    produtQuantity: { type: Number, required: true },
    productImage: { type: String, required: true }
});
{timestamps:true}


module.exports = mongoose.model("ProductModel",ProductSchema)