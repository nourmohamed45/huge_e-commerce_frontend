import useDeleteData from "../../Hooks/useDeleteData"
import useGetData from "../../Hooks/useGetData"
import { useInsertData } from "../../Hooks/useInsertData"
import { useUpdateData } from "../../Hooks/useUpdateData"
import { ALL_REVIEWS_PRODUCT, CREATE_REVIEW, DELETE_SPECIFIC_REVIEW, UPDATE_SPECIFIC_REVIEW } from "../type"


// Create a new review for a product
export const createReview = (id, params) => async (dispatch) => {

  try {
  const response = await useInsertData(`/api/v1/products/${id}/reviews`, params)
  dispatch({
    type: CREATE_REVIEW,
    payload: response,
    loading: true,
  })
  } catch (error) {
    dispatch({
      type: CREATE_REVIEW,
      payload: error.response,
    })
    throw error;
  }
  
}

// Get all review comments for a specific product
export const getAllReviewsProduct = (id, page, limit) => async (dispatch) => {

  try {
  const response = await useGetData(`/api/v1/products/${id}/reviews?page=${page}&limit=${limit}`)
  dispatch({
    type: ALL_REVIEWS_PRODUCT,
    payload: response,
    loading: true,
  })
  } catch (error) {
    dispatch({
      type: ALL_REVIEWS_PRODUCT,
      payload: error.response,
    })
    throw error;
  }
  
}

// delete specific review for a specific product
export const deleteSpecificReview = (id) => async (dispatch) => {

  try {
  const response = await useDeleteData(`/api/v1/reviews/${id}`)
  dispatch({
    type: DELETE_SPECIFIC_REVIEW,
    payload: response,
    loading: true,
  })
  } catch (error) {
    dispatch({
      type: DELETE_SPECIFIC_REVIEW,
      payload: error.response,
    })
    throw error;
  }
  
}


// Update specific review for a specific product
export const updateSpecificReview = (id, params) => async (dispatch) => {

  try {
  const response = await useUpdateData(`/api/v1/reviews/${id}`, params)
  dispatch({
    type: UPDATE_SPECIFIC_REVIEW,
    payload: response,
    loading: true,
  })
  } catch (error) {
    dispatch({
      type: UPDATE_SPECIFIC_REVIEW,
      payload: error.response,
    })
    throw error;
  }
  
}