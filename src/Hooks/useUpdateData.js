import baseUrl from "../Api/baseURL";

export const useUpdateData = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }
  const response = await baseUrl.put(url, params, config);
  return response;
};

export const useUpdateDataWithImage = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await baseUrl.put(url, params, config);
  return response;
};
