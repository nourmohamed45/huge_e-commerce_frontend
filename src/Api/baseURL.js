import axios from "axios";

export const webBaseURL = "http://127.0.0.1:8000";

const baseUrl = axios.create({baseURL: webBaseURL})

export default baseUrl