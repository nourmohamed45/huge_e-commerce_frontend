import { CREATE_COUPON, DELETE_COUPON, GET_ALL_COUPONS, GET_SPECIFIC_COUPON, UPDATE_SPECIFIC_COUPON } from "../type";

const initialState = {
  createCoupon: [],
  coupons: [],
  deleteCoupon: [],
  updateCoupon: [],
  specificCoupon: [],
  loading: true,
};

const couponReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COUPON:
      return {
        ...state,
        createCoupon: action.payload,
        loading: false,
      };
    case GET_ALL_COUPONS:
      return {
        ...state, // Ensure the state is spread correctly to avoid state loss
        coupons: action.payload,
        loading: false,
      };
    case DELETE_COUPON:
      return {
        ...state,
        deleteCoupon: action.payload,
        loading: false,
      }
    case UPDATE_SPECIFIC_COUPON:
      return {
        ...state,
        updateCoupon: action.payload,
        loading: false,
      }
    case GET_SPECIFIC_COUPON:
      return {
        ...state,
        specificCoupon: action.payload,
        loading: false,
      }
    default:
      return state;
  }
};

export default couponReducer;
