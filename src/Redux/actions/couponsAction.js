import { useInsertData } from "../../Hooks/useInsertData";
import { CREATE_COUPON } from "../type";


// Create a new coupon
export const createCoupon = (formData) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/coupons`, formData);
    dispatch({
      type: CREATE_COUPON,
      payload: response,
      loading: true,
    })
  } catch (error) {
    dispatch({
      type: CREATE_COUPON,
      payload: error.response,
    })
    throw error;
  }
}