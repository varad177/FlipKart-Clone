
import axios from "axios";
import * as actionType from '../constants/cartConstants'
const url = "";



export const addcart = ( id  , quantity ) => async(dispatch) => {
    try {
      const {data} =   await axios.get(`${url}/product/${id}`)
      dispatch({type : actionType.ADD_TO_CART , payload : {...data , quantity}})
      

        
    } catch (error) {
        dispatch({type : actionType.ADD_TO_CART_ERROR, payload : error.message})
    }
}

export const removedcart = (id) =>(dispatch) => {
   dispatch({type : actionType.REMOVED_FROM_TO_CART , payload : id})
}