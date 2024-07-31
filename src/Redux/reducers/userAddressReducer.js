import { CREATE_ADDRESS, DELETE_ADDRESS, GET_ALL_ADDRESSES, GET_SPECIFIC_ADDRESS, UPDATE_SPECIFIC_ADDRESS } from "../type";

const initialState = {
  createAddress: [],
  allAddresses: [],
  deleteAddress: [],
  specificAddress: [],
  updateAddress: [],
  loading: true,
};

const userAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ADDRESS:
      return {
        ...state,
        createAddress: action.payload,
        loading: false,
      };
    case GET_ALL_ADDRESSES:
      return {
        ...state,
        allAddresses: action.payload,
        loading: false,
      }
    case DELETE_ADDRESS:
      return {
        ...state,
        deleteAddress: action.payload,
        loading: false,
      }
    case GET_SPECIFIC_ADDRESS:
      return {
        ...state,
        specificAddress: action.payload,
        loading: false,
      }
    case UPDATE_SPECIFIC_ADDRESS:
      return {
        ...state,
        updateAddress: action.payload,
        loading: false,
      }
    default:
      return state;
  }
};

export default userAddressReducer;
