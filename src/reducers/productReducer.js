import {
  ADD_TO_CART,
  GET_NUMBERS_BASKET,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_PRODUCT,
} from "../actions/types";

// const initialState = {
//     cart: 0,
//     cartPrice: 0,
//     products:{}
// }

const initialState = {
  products: [],
};
export default (state = initialState, action ) => {
  let productSelected = "";
  switch (action.type) {
    case ADD_TO_CART:
       return { ...state,products: action.payload }
    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };

    case INCREASE_QUANTITY:
      //   productSelected = { ...state.products[action.payload] };
      //   productSelected.numbers += 1;
      return {
        ...state,
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
      };

    case CLEAR_PRODUCT:
      return {
        ...state,
      };

      // case PRODUCT_TO_CART:
      //       productSelected = { ...state.products[action.payload] }
      //       productSelected.numbers += 1;
      //       productSelected.inCart = true;

      //       return {
      //           ...state,
      //           cart: state.cart + 1,
      //           cartPrice: state.cartPrice + state.products[action.payload].price,
      //           products: {
      //               ...state.products,
      //               [action.payload]: productSelected
      //           }
      //       }

    default:
      return state;
  }
};
//  export default (state = initialState, action) => {
//     let productSelected = "";
//     switch (action.type) {
//         case ADD_TO_CART:
//             productSelected = { ...state.products[action.payload] }
//             productSelected.numbers += 1;
//             productSelected.inCart = true;

//             return {
//                 ...state,
//                 cart: state.cart + 1,
//                 cartPrice: state.cartPrice + state.products[action.payload].price,
//                 products: {
//                     ...state.products,
//                     [action.payload]: productSelected
//                 }
//             }
//         case GET_NUMBERS_BASKET:
//             return {
//                 ...state
//             }

//         case INCREASE_QUANTITY:
//             productSelected = { ...state.products[action.payload] }
//             productSelected.numbers += 1;
//             return {
//                 ...state,
//                 cart: state.cart +1 ,
//                 cartPrice: state.cartPrice + state.products[action.payload].price,
//                 products: {
//                     ...state.products,
//                     [action.payload]: productSelected
//                 }
//             }

//         case DECREASE_QUANTITY:
//             productSelected = { ...state.products[action.payload] }
//             let newCartPrice = 0;
//             let newCartNumbers = 0;
//             if (productSelected.numbers === 0) {
//                 productSelected.numbers = 0
//                 newCartPrice = state.cartPrice
//                 newCartNumbers = state.cart
//             }
//             else {
//                 productSelected.numbers -= 1;
//                 newCartPrice = state.cartPrice - state.products[action.payload].price
//                 newCartNumbers = state.cart - 1
//             }
//             return {
//                 ...state,
//                 cart: newCartNumbers ,
//                 cartPrice: newCartPrice,
//                 products: {
//                     ...state.products,
//                     [action.payload]: productSelected
//                 }
//             }

//         case CLEAR_PRODUCT:
//             productSelected = { ...state.products[action.payload] };
//             let numbersBackup = productSelected.numbers;
//             productSelected.numbers = 0 ;
//             productSelected.inCart = false
//             return {
//                 ...state,
//                 cartPrice: state.cartPrice - (numbersBackup * productSelected.price),
//                 cart: state.cart - numbersBackup,
//                 products: {
//                     ...state.products,
//                     [action.payload]: productSelected
//                 }
//             }

//         default:
//             return state;
//     }
// }

// products: {
//     moong: {
//         name: "Oranges",
//         price: 12.00,
//         tagName: "moong",
//         numbers: 0,
//         inCart: false
//     },
//     sunflower: {
//         name: "Onion",
//         price: 70.00,
//         tagName: "sunflower",
//         numbers: 0,
//         inCart: false
//     },
//     kabuli: {
//         name: "Gobi",
//         price: 80.00,
//         tagName: "kabuli",
//         numbers: 0,
//         inCart: false
//     },
//     soyachunks: {
//         name: "Paneer",
//         price: 90.00,
//         tagName: "soyachunks",
//         numbers: 0,
//         inCart: false
//     }
// }
