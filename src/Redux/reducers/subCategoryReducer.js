import {
  CREATE_SUBCATEGORY,
  GET_ALL_SUBCATEGORY,
  GET_SUBCATEGORY_BY_CATEGORY,
} from "../type";

const initial = {
  subCategory: [],
  loading: true,
};

const subCategoryReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_SUBCATEGORY:
      return {
        ...state,
        subCategory: action.payload,
        loading: false,
      };
    case GET_SUBCATEGORY_BY_CATEGORY:
      return {
        ...state,
        subCategory: action.payload,
        loading: false,
      };
    case CREATE_SUBCATEGORY:
      return {
        ...state,
        subCategory: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default subCategoryReducer;
