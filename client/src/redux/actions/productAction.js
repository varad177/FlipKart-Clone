//action used for the api calls

import axios from "axios";
import * as actionType from "../constants/productsConstants.js";
const url = "";

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${url}/products`);
        dispatch({ type: actionType.GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: actionType.GET_PRODUCTS_FAIL, payload: error.message });
    }
};


export const getProductDetails = (id)=> async (dispatch) =>{
    try {
        dispatch({type: actionType.GET_PRODUCT_DETAILS_REQUEST })
        const { data } = await axios.get(`${url}/product/${id}`);
        dispatch({ type: actionType.GET_PRODUCT_DETAILS_SUCCESS, payload: data });

        
    } catch (error) {
        dispatch({ type: actionType.GET_PRODUCT_DETAILS_FAIL, payload: error.message });

    }

}