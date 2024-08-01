import { useUpdateData } from "../../Hooks/useUpdateData";
import { UPDATE_USER_DATA, UPDATE_USER_PASSWORD } from "../type";

// Update specific address
export const updateUserProfile= (params) => async (dispatch) => {
  try {
  const response = await useUpdateData(`/api/v1/users/updateMe/`, params)
  dispatch({
    type: UPDATE_USER_DATA,
    payload: response,
    loading: true,
  })
  } catch (error) {
    dispatch({
      type: UPDATE_USER_DATA,
      payload: error.response,
    })
    throw error;
  }
  
}

// Update specific address
export const updateUserPasswordProfile= (params) => async (dispatch) => {
  try {
  const response = await useUpdateData(`/api/v1/users/changeMyPassword`, params)
  dispatch({
    type: UPDATE_USER_PASSWORD,
    payload: response,
    loading: true,
  })
  } catch (error) {
    dispatch({
      type: UPDATE_USER_PASSWORD,
      payload: error.response,
    })
    throw error;
  }
  
}