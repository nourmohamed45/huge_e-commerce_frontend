
import baseUrl from "../Api/baseURL"

export const useUpdateData = async (url, params) => {
  const response = await baseUrl.put(url, params);
  return response;
}

export const useUpdateDataWithImage = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }
  const response = await baseUrl.put(url, params, config);
  return response;
}

