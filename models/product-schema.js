
import mongoose from "mongoose";

const productScehema = new mongoose.Schema({
    id: {
        type:String,
        require : true,
        unique:[true , "cant insert"]
    },
    url: String,
    detailUrl: String,
    title: Object,
    price:Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String,


});


const product = mongoose.model('product', productScehema)
export default product;