import useDeleteData from "../../Hooks/useDeleteData";
import { useGetDataToken } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { useUpdateData } from "../../Hooks/useUpdateData";
import { ADD_TO_CART, APPLY_COUPON, CLEAR_CART, GET_CART_ITEMS, REMOVE_FROM_CART, UPDATE_CART_ITEM_COUNT } from "../type";


// ADD To Cart
export const addToCart = (body) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/cart`, body)
    dispatch({
      type: ADD_TO_CART,
      payload: response,
      loading: true,
    })

  } catch (error) {
    dispatch({
      type: ADD_TO_CART,
      payload: error.response,
    })
    throw error;
  }
} 

// get all items in Cart
export const getAllItemsInCart = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/cart`)
    dispatch({
      type: GET_CART_ITEMS,
      payload: response,
      loading: true,
    })

  } catch (error) {
    dispatch({
      type: GET_CART_ITEMS,
      payload: error.response,
    })
    throw error;
  }
} 

// delete all cart 
export const clearCart = () => async (dispatch) => {

  try {
  const response = await useDeleteData(`/api/v1/cart`)
  dispatch({
    type: CLEAR_CART,
    payload: response,
    loading: true,
  })
  } catch (error) {
    dispatch({
      type: CLEAR_CART,
      payload: error.response,
    })
    throw error;
  }
  
}

// delete item from cart 
export const deleteItemFromCart = (prodID) => async (dispatch) => {

  try {
  const response = await useDeleteData(`/api/v1/cart/${prodID}`)
  dispatch({
    type: REMOVE_FROM_CART,
    payload: response,
    loading: true,
  })
  } catch (error) {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: error.response,
    })
    throw error;
  }
  
}

// Update specific item in cart
export const updateItemCount = (id, params) => async (dispatch) => {

  try {
  const response = await useUpdateData(`/api/v1/cart/${id}`, params)
  dispatch({
    type: UPDATE_CART_ITEM_COUNT,
    payload: response,
    loading: true,
  })
  } catch (error) {
    dispatch({
      type: UPDATE_CART_ITEM_COUNT,
      payload: error.response,
    })
    throw error;
  }
  
}

// Update specific item in cart
export const applyCoupon = (params) => async (dispatch) => {

  try {
  const response = await useUpdateData(`/api/v1/cart/applyCoupon`, params)
  dispatch({
    type: APPLY_COUPON,
    payload: response,
    loading: true,
  })
  } catch (error) {
    dispatch({
      type: APPLY_COUPON,
      payload: error.response,
    })
    throw error;
  }
  
}