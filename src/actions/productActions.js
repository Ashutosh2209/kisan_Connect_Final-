import { ADD_TO_CART, GET_NUMBERS_BASKET } from "./types";

export const addToCart = (productName) => {
  return (dispatch) => {
    console.log("Adding basket of item",productName);

    dispatch({
      type: ADD_TO_CART,
      payload: productName,
    });
  };
};

export const getCartNumbers = () => {
  return (dispatch) => {
    // console.log("getting total cart in basket")
    dispatch({
      type: GET_NUMBERS_BASKET,
      // payload: item
    });
  };
};



// export const productToCart = (productName) => {
//   return (dispatch) => {
//     console.log("prduct to cart",productName);

//     dispatch({
//       type: PRODUCT_TO_CART,
//       payload: productName,
//     });
//   };
// };
