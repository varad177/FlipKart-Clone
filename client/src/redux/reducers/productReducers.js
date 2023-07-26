import * as actionType from "../constants/productsConstants.js";

export const getProductsReducers = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCTS_SUCCESS: return { products: action.payload }

        case actionType.GET_PRODUCTS_FAIL: return { error: action.payload }

        default: return state
    }
}

export const getProductDetailsReducers = (state = { Product: {} }, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCT_DETAILS_REQUEST:
            return { loading: true }
        case actionType.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false, Product: action.payload }
        case actionType.GET_PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        case actionType.GET_PRODUCT_DETAILS_RESET:
            return { Product: {} }
            default: return state
    }
}