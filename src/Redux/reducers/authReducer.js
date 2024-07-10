import {
  FORGET_PASSWORD,
  LOGIN_USER,
  REGISTER_USER,
  RESET_PASSWORD,
  VERIFY_RESET_CODE,
} from "../type";

const initial = {
  createUser: [],
  user: [],
  forgotPassword: [],
  verifyResetCode: [],
  resetPassword: [],
  loading: true,
};

const authReducer = (state = initial, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        createUser: action.payload,
        loading: false,
      };
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case FORGET_PASSWORD:
      return {
        ...state,
        forgotPassword: action.payload,
        loading: false,
      };
    case VERIFY_RESET_CODE:
      return {
        ...state,
        verifyResetCode: action.payload,
        loading: false,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        resetPassword: action.payload,
        loading: false,
      }
    default:
      return state;
  }
};

export default authReducer;
