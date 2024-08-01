import { UPDATE_USER_DATA, UPDATE_USER_PASSWORD } from "../type";

const initialState = {
  updateUserData: [],
  
  loading: true,
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_DATA:
      return {
        ...state,
        updateUserData: action.payload,
        loading: false,
      };
    case UPDATE_USER_PASSWORD:
      return {
        ...state,
        updateUserPassword: action.payload,
        loading: false,
      }
    default:
      return state;
  }
};

export default userProfileReducer;
