
import { products } from "./constant/data.js"
import product from "./models/product-schema.js";


const DefalutData = async () => {
    try {
        await product.insertMany(products)
        console.log("data save in database succefully");

    } catch (error) {
        console.log("error while inserting the defalut data ", error.message);
    }

}

export default DefalutData;