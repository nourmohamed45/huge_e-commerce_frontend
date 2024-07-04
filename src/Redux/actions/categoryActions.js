import { GET_ALL_CATEGORY, GET_ERROR, CREATE_CATEGORY, GET_SPECIAL_CATEGORY } from '../type';

import useGetData from '../../Hooks/useGetData';
import { useInsertDataWithImage } from '../../Hooks/useInsertData';


// Get all categories
export const getAllCategory = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/categories?limit=${limit}`);
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: 'Error: ' + e.message,
    });
  }
};

// Get all categories with pagination
export const getAllCategoryPage = (limit, page) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/categories?limit=${limit}&page=${page}`);
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: 'Error: ' + e.message,
      loading: true,
    });
    throw e;
  }
};

// Get Special Categorie
export const getSpecialCategory = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/categories/${id}`);
    dispatch({
      type: GET_SPECIAL_CATEGORY,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: 'Error: ' + e.message,
      loading: true,
    });
    throw e;
  }
}

// Create a new category with image
export const createCategory = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(`/api/v1/categories`, formData);
    dispatch({
      type: CREATE_CATEGORY,
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
