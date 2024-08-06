import { useInsertData } from "../../Hooks/useInsertData";
import { CREATE_ORDER_CASH } from "../type";

// Create Order Cash
export const createOrderCash = (id, body) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/orders/${id}`, body);
    dispatch({
      type: CREATE_ORDER_CASH,
      payload: response,
      loading: true,
    })
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_CASH,
      payload: error.response,
    })
    throw error;
  }
}
