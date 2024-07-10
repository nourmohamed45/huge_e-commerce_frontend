
import baseUrl from "../Api/baseURL"

const useGetData = async (url, params) => {
  const response = await baseUrl.get(url, params);
  return response.data;
}

export const useGetDataToken = async (url) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }
  const response = await baseUrl.get(url, config);
  return response.data;
}

export default useGetData;