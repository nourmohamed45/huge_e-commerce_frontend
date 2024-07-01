import { CREATE_BRAND, GET_ALL_BRANDS, GET_ERROR } from "../type";

import useGetData from "../../Hooks/useGetData";
import { useInsertDataWithImage } from "../../Hooks/useInsertData";

// Get all brands

export const getAllBrands = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/brands?limit=${limit}`);
    dispatch({
      type: GET_ALL_BRANDS,
      payload: response,
    })
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: 'Error: ' + e.message,
    })
  }
}


// Get all brands by page

export const getAllBrandsPage = (limit, page) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/brands?limit=${limit}&page=${page}`);
    dispatch({
      type: GET_ALL_BRANDS,
      payload: response,
    })
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: 'Error: ' + e.message,
    })
  }
}

// Create Brand
export const createBrand = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(`/api/v1/brands`, formData);
    dispatch({
      type: CREATE_BRAND,
      payload: response,
      loading: true,
    });
    return response;
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: 'Error: ' + e.message,
    });
    throw e;
  }
};