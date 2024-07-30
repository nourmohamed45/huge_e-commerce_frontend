import { useGetDataToken } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { CREATE_COUPON, GET_ALL_COUPONS } from "../type";


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

// Get all Coupons
export const getAllCoupons = ( limit, page) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/coupons?limit=${limit}&page=${page}`);
    dispatch({
      type: GET_ALL_COUPONS,
      payload: response,
      loading: true, 
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_COUPONS,
      payload: error.response,
    });
    throw error;
  }
};
