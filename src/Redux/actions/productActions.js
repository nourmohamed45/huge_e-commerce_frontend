import useDeleteData from "../../Hooks/useDeleteData";
import useGetData from "../../Hooks/useGetData";
import { useInsertDataWithImage } from "../../Hooks/useInsertData";
import { useUpdateDataWithImage } from "../../Hooks/useUpdateData";
import { CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCTS, GET_ERROR, GET_PRODUCTS_BY_CATEGORY, GET_SPECIAL_PRODUCT, UPDATE_PRODUCT } from "../type";

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

// Get All Products with pagination
export const getAllProductsPage = (limit, page) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?limit=${limit}&page=${page}`);
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

// Get All Products by Searching with all types of search
export const getAllProductsQuerySearch = (queryString) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?${queryString}`);
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

// Delete Products by its own id

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/products/${productId}`);
    dispatch({
      type: DELETE_PRODUCT,
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

// Update Products by its own id

export const updateProduct = (productId, formData) => async (dispatch) => {
  try {
    const response = await useUpdateDataWithImage(`/api/v1/products/${productId}`, formData);
    dispatch({
      type: UPDATE_PRODUCT,
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