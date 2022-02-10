import { combineReducers } from 'redux';
import  productReducer  from './productReducer';
import { userReducer } from './userReducer';
import { cartReducer } from './cartReducer';

let initialState = {
    cart: {
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      
    },
  };

export default combineReducers({
    cartState: productReducer,
    user: userReducer,
    cart: cartReducer,
}); 