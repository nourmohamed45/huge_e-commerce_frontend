import useDeleteData from "../../Hooks/useDeleteData";
import { useGetDataToken } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { useUpdateData } from "../../Hooks/useUpdateData";
import { CREATE_COUPON, DELETE_COUPON, GET_ALL_COUPONS, GET_SPECIFIC_COUPON, UPDATE_SPECIFIC_COUPON } from "../type";


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

// delete specific coupon
export const deleteCoupon = (id) => async (dispatch) => {

  try {
  const response = await useDeleteData(`/api/v1/coupons/${id}`)
  dispatch({
    type: DELETE_COUPON,
    payload: response,
    loading: true,
  })
  } catch (error) {
    dispatch({
      type: DELETE_COUPON,
      payload: error.response,
    })
    throw error;
  }
  
}

// Update specific coupon
export const updateSpecificCoupon= (id, params) => async (dispatch) => {

  try {
  const response = await useUpdateData(`/api/v1/coupons/${id}`, params)
  dispatch({
    type: UPDATE_SPECIFIC_COUPON,
    payload: response,
    loading: true,
  })
  } catch (error) {
    dispatch({
      type: UPDATE_SPECIFIC_COUPON,
      payload: error.response,
    })
    throw error;
  }
  
}

// Get all Coupons
export const getSpecificCoupon = (id) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/coupons/${id}`);
    dispatch({
      type: GET_SPECIFIC_COUPON,
      payload: response,
      loading: true, 
    });
  } catch (error) {
    dispatch({
      type: GET_SPECIFIC_COUPON,
      payload: error.response,
    });
    throw error;
  }
};