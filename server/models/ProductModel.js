const mongoose=require('mongoose')

const ProductSchema=new mongoose.Schema({
    ProductName:{type: String, required: true},
    ProductDescription:{tpe:String},
    ProductPrice:{type: Number, required:true , unique: true},
    Quantity: { type: Number, required: true },
    Image:{type : String}
    
},

{
    timestamps: true
}
);

module.exports = mongoose.model("ProductModel",ProductSchema)