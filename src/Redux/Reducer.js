import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_TO_CART,
} from "./Constant";

const init = {
  cart: [],
  products: [],
  remove: [],
};

export const ProductReducer = (state = init, action) => {
  switch (action.type) {

    case ADD_TO_CART:
      console.log("add to cart", action);
      const productWithDefaultQuantity = {
        ...action.data,
        qty: 1,
      };
      return {
        ...state,
        cart: [...state.cart, productWithDefaultQuantity],
      };

    case REMOVE_TO_CART:
      console.log("REMOVE R", action);
      const updatedCart = state.cart.filter(
        (item) => item.handle !== action.remove
      );
      return { ...state, cart: updatedCart, remove: action.remove };

      case DECREASE_QUANTITY:
      const updatedCartDec = state.cart.map((item) => {
        if (item.handle === action.item.handle) {
          return {
            ...item,
            qty: Math.max(item.qty - 1, 1),
          };
        }
        return item;
      });
      return { ...state, cart: updatedCartDec };

    case INCREASE_QUANTITY:
      const updatedCartInc = state.cart.map((item) => {
        if (item.handle === action.item.handle) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        }
        return item;
      });
      return { ...state, cart: updatedCartInc };

    default:
      return state;
  }
};
