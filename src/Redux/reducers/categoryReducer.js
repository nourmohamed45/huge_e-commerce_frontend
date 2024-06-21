import { GET_ALL_CATEGORY ,GET_ERROR, CREATE_CATEGORY } from "../type";

const initial = {
  category: [],
  loading: true,
};

const categoryReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return {
        ...state,
        category: action.payload,
        loading: false,
      };
    case CREATE_CATEGORY:
      return {
        category: action.payload,
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

export default categoryReducer;
