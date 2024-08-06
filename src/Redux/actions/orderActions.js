import { useGetDataToken } from "../../Hooks/useGetData";
import {  GET_ALL_ORDERS } from "../type";

// Create Order Cash
export const getAllOrders = (limit, page) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/orders?limit=${limit}&page=${page}`);
    dispatch({
      type: GET_ALL_ORDERS,
      payload: response,
      loading: true,
    })
  } catch (error) {
    dispatch({
      type: GET_ALL_ORDERS,
      payload: error.response,
    })
    throw error;
  }
}
