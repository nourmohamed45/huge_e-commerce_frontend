import useGetData from "../../Hooks/useGetData";
import { useInsertDataWithImage } from "../../Hooks/useInsertData";
import { CREATE_PRODUCT, GET_ALL_PRODUCTS, GET_ERROR, GET_PRODUCTS_BY_CATEGORY, GET_SPECIAL_PRODUCT } from "../type";

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
      loading: true,
    });
    throw e;
  }
};

// Get All Products
export const getAllProducts = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?limit=${limit}`);
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: `Error: ${e.message}`,
      loading: true,
    });
    throw e;
  }
}

// Get Specific Product details
export const getProductDetails = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products/${id}`);
    dispatch({
      type: GET_SPECIAL_PRODUCT,
      payload: response,
      loading: true,
    })
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: `Error: ${e.message}`,
      loading: true,
    });
    throw e;
  }
}

// Get products by special category

export const getProductsBySpecialCategory = (categoryId) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?category=${categoryId}`);
    dispatch({
      type: GET_PRODUCTS_BY_CATEGORY,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: `Error: ${e.message}`,
      loading: true,
    });
    throw e;
  }
}