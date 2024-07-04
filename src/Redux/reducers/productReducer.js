import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_ERROR,
  GET_PRODUCTS_BY_CATEGORY,
  GET_SPECIAL_PRODUCT,
  UPDATE_PRODUCT,
} from "../type";

const initial = {
  product: [],
  allProducts: [],
  specialProducts: [],
  productByCategory: [],
  deleteProduct: [],
  updateProduct: [],
  error: [],
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
    case DELETE_PRODUCT:
      return {
        ...state,
        deleteProduct: action.payloads,
        loading: false,
      }
    case UPDATE_PRODUCT:
      return {
        ...state,
        updateProduct: action.payloads,
        loading: false,
      }
    case GET_ERROR:
      return {
        error: action.payload,
        loading: false,
      }
    default:
      return state;
  }
};

export default productReducer;
