import { CREATE_BRAND, GET_ALL_BRANDS, GET_ERROR, GET_SPECIAL_BRAND } from "../type";

const initial = {
  brands: [],
  specialBrand: [],
  loading: true,
};

const brandReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_BRANDS:
      return {
        ...state,
        brands: action.payload,
        loading: false,
      };
    case CREATE_BRAND:
      return {
        brands: action.payload,
        loading: false,
      };
    case GET_SPECIAL_BRAND:
      return {
        specialBrand: action.payload,
        loading: false,
      }
    case GET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

export default brandReducer;
