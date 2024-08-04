import { ADD_TO_CART, APPLY_COUPON, CLEAR_CART, GET_CART_ITEMS, REMOVE_FROM_CART, UPDATE_CART_ITEM_COUNT } from "../type";

const initialState = {
  addToCart: [],
  cartItems: [],
  clearCart: [],
  removeItemFromCart: [],
  updateItemCount: [],
  applyCoupon: [],
  loading: true,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        addToCart: action.payload,
        loading: false,
      };
    case GET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
        loading: false,
      }
    case CLEAR_CART:
      return {
        ...state,
        clearCart: action.payload,
        loading: false,
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        removeItemFromCart: action.payload,
        loading: false,
      }
    case UPDATE_CART_ITEM_COUNT:
      return {
        ...state,
        updateItemCount: action.payload,
        loading: false,
      }
    case APPLY_COUPON:
      return {
        ...state,
        applyCoupon: action.payload,
        loading: false,
      }
    default:
      return state;
  }
};

export default cartReducer;