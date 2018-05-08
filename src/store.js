import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state, action) => {

    if(action.type === 'REPLACE_PRODUCTS') {
        return {
            ...state,
            products: action.products
        }

    }else if(action.type === "ADD_TO_CART") {
        return {
            ...state,
            cart: state.cart.concat(action.product)
        }
    } else if(action.type === 'REMOVE_FROM_CART') {
        let productIndex = action.product.id;
        return {
            ...state,
            cart: state.cart.filter((product) => {
                return product.id !== productIndex
            })
        }
    }
    return state;
};

export default createStore(reducer, { cart: [], products: [] }, applyMiddleware(thunk));