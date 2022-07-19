import ApiClient from "./apiClient";

const { REACT_APP_API_URL } = process.env;

export const baseApi = new ApiClient(`${REACT_APP_API_URL}`, true);
export const blogAxios = new ApiClient(`${REACT_APP_API_URL}blog`, true);
