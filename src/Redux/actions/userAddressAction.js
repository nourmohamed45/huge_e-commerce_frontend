import useDeleteData from "../../Hooks/useDeleteData";
import { useGetDataToken } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { useUpdateData } from "../../Hooks/useUpdateData";
import { CREATE_ADDRESS, DELETE_ADDRESS, GET_ALL_ADDRESSES, GET_SPECIFIC_ADDRESS, UPDATE_SPECIFIC_ADDRESS } from "../type";

// Create a new address
export const createAddress = (formData) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/addresses`, formData);
    dispatch({
      type: CREATE_ADDRESS,
      payload: response,
      loading: true,
    })
  } catch (error) {
    dispatch({
      type: CREATE_ADDRESS,
      payload: error.response,
    })
    throw error;
  }
}

// Get all addresses
export const getAllAddressUser = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/addresses`);
    dispatch({
      type: GET_ALL_ADDRESSES,
      payload: response,
      loading: true, 
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_ADDRESSES,
      payload: error.response,
    });
    throw error;
  }
};


// delete specific coupon
export const deleteAddress = (id) => async (dispatch) => {

  try {
  const response = await useDeleteData(`/api/v1/addresses/${id}`)
  dispatch({
    type: DELETE_ADDRESS,
    payload: response,
    loading: true,
  })
  } catch (error) {
    dispatch({
      type: DELETE_ADDRESS,
      payload: error.response,
    })
    throw error;
  }
  
}

// Get specific address
export const getSpecificAddress = (id) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/addresses/${id}`);
    dispatch({
      type: GET_SPECIFIC_ADDRESS,
      payload: response,
      loading: true, 
    });
  } catch (error) {
    dispatch({
      type: GET_SPECIFIC_ADDRESS,
      payload: error.response,
    });
    throw error;
  }
};

// Update specific address
export const updateSpecificAddress= (id, params) => async (dispatch) => {

  try {
  const response = await useUpdateData(`/api/v1/addresses/${id}`, params)
  dispatch({
    type: UPDATE_SPECIFIC_ADDRESS,
    payload: response,
    loading: true,
  })
  } catch (error) {
    dispatch({
      type: UPDATE_SPECIFIC_ADDRESS,
      payload: error.response,
    })
    throw error;
  }
  
}