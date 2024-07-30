import { CREATE_COUPON } from "../type";

const initialState = {
  createCoupon: [],

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
    default:
      return state;
  }
};

export default couponReducer;
