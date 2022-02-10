import { PRODUCT_TO_CART,REMOVE_CART_ITEM } from "../actions/types";
import axios from "axios";

//add items to cart
export const addItemsToCart = (_id, quantity) => async (dispatch, getState) => {
  console.log("_id", _id);
  const { data } = await axios.get(
    `http://localhost:5000/api/v1/products/?_id=${_id}`
  );
  console.log("adat", data);
  dispatch({
    type: PRODUCT_TO_CART,

    payload: {
      product: data.products[0],
      // product: data.products._id,
      // name: data.products.name,
      // price: data.products.price,
      // image: data.products.images,
      // stock: data.products.Stock,
      quantity,
      
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};


//Remove items from cart
export const removeItemsFromCart = (_id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: _id,
    
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
