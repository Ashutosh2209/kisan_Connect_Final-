import {
   PRODUCT_TO_CART,REMOVE_CART_ITEM
  } from "../actions/types";


  
  export const cartReducer = (
    state = { cartItems: [] },action) => {
    switch (action.type) {
        case PRODUCT_TO_CART:
          const item = action.payload;
    
          const isItemExist = state.cartItems.find(
            (i) => i.product === item.product
          );
          console.log("item",item.product);
          
          // return {
          //   ...state,
          //   cartItems: [...state.cartItems, item.product],
          // };

          if (isItemExist) {
            return {
              ...state,
              cartItems: state.cartItems.map((i) =>
                i.products === isItemExist.products ? item : i
              ),
            };
        } else {
            return {
              ...state,
              cartItems: [...state.cartItems, item.product],
            };
        }

        case REMOVE_CART_ITEM:
          return {
            ...state,
            cartItems: state.cartItems.filter((i) => i._id !== action.payload),
          };

        default:
          return state;
    }
  }