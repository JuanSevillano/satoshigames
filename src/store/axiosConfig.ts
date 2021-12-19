import axios, { Axios, AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
    baseURL: `https://randomuser.me/api/`
};

const api: Axios = axios.create(axiosConfig);

export default api; 