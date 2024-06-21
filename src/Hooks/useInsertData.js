
import baseUrl from "../Api/baseURL"

export const useInsertData = async (url, params) => {
  const response = await baseUrl.post(url, params);
  return response;
}

export const useInsertDataWithImage = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }
  const response = await baseUrl.post(url, params, config);
  // console.log(response)
  return response;
}

