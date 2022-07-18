import ApiClient from "./apiClient";

const {REACT_APP_API_URL} = process.env;

export const baseApi = new ApiClient(`${REACT_APP_API_URL}`, true);
export const blogApi = new ApiClient(`${REACT_APP_API_URL}blog`, true);
