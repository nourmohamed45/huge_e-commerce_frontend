import { CREATE_PRODUCT, GET_ALL_PRODUCTS } from "../type";


const initial = {
  product: [],
  loading: true,
}

const productReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_PRODUCT: 
      return {
        product: action.payload,
        loading: false,
      }
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        product: action.payload,
        loading: false,
      }
    default:
      return state;
  }
}

export default productReducer;