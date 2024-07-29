import useDeleteData from "../../Hooks/useDeleteData";
import { useGetDataToken } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { ADD_TO_WISHLIST, GET_ALL_PRODUCTS_FROM_WISHLIST, REMOVE_FROM_WISHLIST } from "../type";

// ADD To WishList
export const addToWishList = (productId) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/wishlist`, productId)
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: response,
      loading: true,
    })

  } catch (error) {
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: error.response,
    })
    throw error;
  }
} 

// Remove from WishList
export const removeFromWishList = (productId) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/wishlist/${productId}`)
    dispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: response,
      loading: true,
    })

  } catch (error) {
    dispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: error.response,
    })
    throw error;
  }
} 

// get all product from WishList
export const getAllProductFromWishList = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/wishlist`)
    dispatch({
      type: GET_ALL_PRODUCTS_FROM_WISHLIST,
      payload: response,
      loading: true,
    })

  } catch (error) {
    dispatch({
      type: GET_ALL_PRODUCTS_FROM_WISHLIST,
      payload: error.response,
    })
    throw error;
  }
} 