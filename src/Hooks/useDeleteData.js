
import baseUrl from "../Api/baseURL"

const useDeleteData = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGQwZDM3NzI4NWEzZTc4OWZlNTMyMCIsImlhdCI6MTcyMDY1MTI2MywiZXhwIjoxNzI4NDI3MjYzfQ.DTuWmz2k6xsmS29k5wm_unaek8j2aAUYDElhOdXBsfE`,
    },
  }
  const response = await baseUrl.delete(url, params, config);
  return response.data;
}

export default useDeleteData;