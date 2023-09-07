import axios from "axios";
import config from "@/utils/config";

const service = axios.create({
  baseURL: config.baseUrl,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${(function () {
      return localStorage.getItem("token");
    })()}`,
  },
});

//request

service.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    /* if (accessToken) {
      config.headers.common = { Authorization: `Bearer ${accessToken}` };
      console.log(config.headers.common);
    }*/
    return config;
  },
  (error) => {
    Promise.reject(error.response || error.message);
  },
);

//response

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // let originalRequest = error.config;
    // let refreshToken = localStorage.getItem("refreshToken");
    // const username = EmailDecoder(); // decode email from jwt token subject
    // if (
    //   refreshToken &&
    //   error.response.status === 403 &&
    //   !originalRequest._retry &&
    //   username
    // ) {
    //   originalRequest._retry = true;
    //   return axios
    //     .post(`${config.baseUrl}/authentication/refresh`, {
    //       refreshToken: refreshToken,
    //       username,
    //     })
    //     .then((res) => {
    //       if (res.status === 200) {
    //         localStorage.setItem("accessToken", res.data.accessToken);
    //         localStorage.setItem("refreshToken", res.data.refreshToken);
    //
    //         originalRequest.headers[
    //           "Authorization"
    //         ] = `Bearer ${res.data.accessToken}`;
    //
    //         return axios(originalRequest);
    //       }
    //     })
    //     .catch(() => {
    //       localStorage.clear();
    //       location.reload();
    //     });
    // }
    return Promise.reject(error.response || error.message);
  },
);

export default service;
