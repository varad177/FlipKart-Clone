 import {createStore , combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
 import { composeWithDevTools } from 'redux-devtools-extension'
import { getProductDetailsReducers, getProductsReducers } from './reducers/productReducers'
import { cartreducer } from './reducers/cartReducer'



 //hame kya kya actions chahiye vo ham reducers ke andar mentions karenge 


 const reducer = combineReducers({
    getProducts : getProductsReducers,
    getProductDetails :getProductDetailsReducers,
    cart : cartreducer
 })

 const middleware = [thunk]

 const store  = createStore(
    //takes 2 argument 
    // reducer and middle ware 
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
 )


 export default store