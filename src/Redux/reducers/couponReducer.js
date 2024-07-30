import { CREATE_COUPON, GET_ALL_COUPONS } from "../type";

const initialState = {
  createCoupon: [],
  coupons: [],
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
    default:
      return state;
  }
};

export default couponReducer;
