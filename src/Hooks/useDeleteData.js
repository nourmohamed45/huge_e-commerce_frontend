import baseUrl from "../Api/baseURL";

const useDeleteData = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await baseUrl.delete(url, params, config);
  return response;
};

export default useDeleteData;
