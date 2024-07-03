import {
  CREATE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_SPECIAL_PRODUCT,
} from "../type";

const initial = {
  product: [],
  allProducts: [],
  specialProducts: [],
  productByCategory: [],
  loading: true,
};

const productReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return {
        product: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        loading: false,
      };
    case GET_SPECIAL_PRODUCT:
      return {
        ...state,
        specialProducts: action.payload,
        loading: false,
      };
    case GET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        productByCategory: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default productReducer;
