import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cart, products } from './reducers';

export default createStore(combineReducers({ cart: cart, products:products }), applyMiddleware(thunk));