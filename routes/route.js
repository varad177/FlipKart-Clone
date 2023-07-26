import express from "express";
import { userLogin, userSignup } from "../controller/usercontroller.js";
import { getproductbyid, getproducts } from "../controller/productcontroller.js";

const router = express.Router()

router.post('/signup', userSignup);
router.post('/login', userLogin)

router.get('/products' , getproducts)

router.get('/product/:id' , getproductbyid)

export default router