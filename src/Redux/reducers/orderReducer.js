import { GET_ALL_ORDERS } from "../type";

const initialState = {
  getAllOrders: [],
  
  loading: true,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS:
      return {
        ...state,
        getAllOrders: action.payload,
        loading: false,
      };
    
    default:
      return state;
  }
};

export default orderReducer;
