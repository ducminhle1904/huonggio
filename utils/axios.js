import axios from "axios";

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_PATH_API,
    headers: {
        "content-type": "application/json",
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    const customHeaders = {};

    const accessToken = window.localStorage.getItem("access-token");
    if (accessToken) {
        customHeaders.Authorization = accessToken;
    }

    return {
        ...config,
        headers: {
            ...customHeaders, // auto attach token
            ...config.headers, // but you can override for some requests
        },
    };
});

axiosClient.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || "Something went wrong")
);

export default axiosClient;
