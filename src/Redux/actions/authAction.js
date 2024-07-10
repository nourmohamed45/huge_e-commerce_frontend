import { useInsertData } from "../../Hooks/useInsertData"
import { useUpdateData } from "../../Hooks/useUpdateData";
import { FORGET_PASSWORD, LOGIN_USER, REGISTER_USER, RESET_PASSWORD, VERIFY_RESET_CODE } from "../type";

// Register (create user)
export const createNewUser = (formData) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/signup`, formData);

    dispatch({
      type: REGISTER_USER,
      payload: response,
      loading: true,
    })
    return response;
  } catch (e) {
    dispatch({
      type: REGISTER_USER,
      payload: `Error: ${e.response}`,
      loading: true,
    });
    throw e;
  }
}

// Login 
export const loginUser = (formData) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/login`, formData);

    dispatch({
      type: LOGIN_USER,
      payload: response,
      loading: true,
    })
    return response;
  } catch (e) {
    dispatch({
      type: LOGIN_USER,
      payload: `Error: ${e.response}`,
      loading: true,
    });
    throw e;
  }
}

// 1- forget password 
export const forgetPassword = (formData) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/forgotPasswords`, formData);

    dispatch({
      type: FORGET_PASSWORD,
      payload: response,
      loading: true,
    })
    return response;
  } catch (e) {
    dispatch({
      type: FORGET_PASSWORD,
      payload: `Error: ${e.response}`,
      loading: true,
    });
    throw e;
  }
}

// 2- verify reset code
export const verifyResetCode = (formData) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/verifyResetCode`, formData);

    dispatch({
      type: VERIFY_RESET_CODE,
      payload: response,
      loading: true,
    })
    return response;
  } catch (e) {
    dispatch({
      type: VERIFY_RESET_CODE,
      payload: `Error: ${e.response}`,
      loading: true,
    });
    throw e;
  }
}

// 3- reset password
export const resetPassword = (formData) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/auth/resetPassword`, formData);

    dispatch({
      type: RESET_PASSWORD,
      payload: response,
      loading: true,
    })
    return response;
  } catch (e) {
    dispatch({
      type: RESET_PASSWORD,
      payload: `Error: ${e.response}`,
      loading: true,
    });
    throw e;
  }
}