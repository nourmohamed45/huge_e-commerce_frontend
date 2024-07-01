import { useInsertDataWithImage } from "../../Hooks/useInsertData";
import { CREATE_PRODUCT, GET_ERROR } from "../type";

// Create a new product with images upload
export const createProduct = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(`/api/v1/products`, formData);
    dispatch({
      type: CREATE_PRODUCT,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: `Error: ${e.message}`,
    });
    throw e;
  }
};
