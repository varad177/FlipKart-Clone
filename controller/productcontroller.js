
import product from "../models/product-schema.js"
export const getproducts = async (req, res) => {
    try {

        const products = await product.find({})
        res.status(200).json(products)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const getproductbyid = async (req , res) =>{
    try {
        const id = req.params.id;

       const Product = await  product.findOne({'id': id})

        res.status(200).json(Product)

        
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}