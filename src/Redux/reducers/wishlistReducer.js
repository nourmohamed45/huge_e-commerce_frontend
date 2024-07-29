import { ADD_TO_WISHLIST, GET_ALL_PRODUCTS_FROM_WISHLIST, REMOVE_FROM_WISHLIST } from "../type";

const initialState = {
  addToWishlist: [],
  removeFromWishList: [],
  getAllWishList: [],
  loading: true,
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        addToWishlist: action.payload,
        loading: false,
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        removeFromWishList: action.payload,
        loading: false,
      }
    case GET_ALL_PRODUCTS_FROM_WISHLIST:
      return {
        ...state,
        getAllWishList: action.payload,
        loading: false,
      }
    default:
      return state;
  }
};

export default wishlistReducer;