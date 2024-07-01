import useGetData from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData"
import { CREATE_SUBCATEGORY, GET_ALL_SUBCATEGORY, GET_ERROR, GET_SUBCATEGORY_BY_CATEGORY } from "../type";

// create subCategory
export const createSubCategory = (params) => async (dispatch) => {
  try {
    const response = await useInsertData("/api/v1/subcategories", params);

    dispatch({
      type: CREATE_SUBCATEGORY,
      payload: response,
      loading: true,
    })
    return response;
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: 'Error:'+ e.message,
    })
    throw e;
  }
}

// get all subcategories
export const getAllSubcategories = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/subcategories?limit=${limit}`);
    dispatch({
      type: GET_ALL_SUBCATEGORY,
      payload: response,
    })
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: 'Error:'+ e.message,
    })
    throw e;
  }
}

// get subcategories depending on category

export const getSubcategoriesByCategory = (categoryId) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/categories/${categoryId}/subcategories`);
    dispatch({
      type: GET_SUBCATEGORY_BY_CATEGORY,
      payload: response,
    })
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: 'Error:'+ e.message,
    })
    throw e;
  }
}