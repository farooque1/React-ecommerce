import { ADD_TO_CART, DECREASE_QUANTITY,INCREASE_QUANTITY, REMOVE_TO_CART,} from "./Constant";

export const addtocart = (data) => {
  console.log("add to cart ", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removetocart = (remove) => {
  console.log("Remove action", remove);
  return {
    type: REMOVE_TO_CART,
    remove,
  };
};

export const decreaseQuantity = (item) => ({
  type: DECREASE_QUANTITY,
  item: item,
});

export const increaseQuantity = (item) => ({
  type: INCREASE_QUANTITY,
  item: item,
});
