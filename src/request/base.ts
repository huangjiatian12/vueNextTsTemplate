import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import { ResponseDataConfig, ResponseErrorConfig } from "../types";
import throwErrorMsg from "./error";

const baseURL = import.meta.env.VITE_HOST;
const instance: AxiosInstance = axios.create({
  baseURL, // * 请求url
  timeout: 50000, // * 请求超时时间
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError): Promise<ResponseErrorConfig> => {
    let status = "headerError",
      url = error.config.url || "暂无接口";
    return throwErrorMsg(status, url, error.message);
  }
);

instance.interceptors.response.use(
  (res: AxiosResponse<ResponseDataConfig>) => {
    const url = res.config.url || "暂无接口";
    let { data: resData, status } = res;
    let { code, data, message = "接口错误" } = resData;
    if (status === 200 && code === 1) {
      return Promise.resolve(data);
    } else {
      return throwErrorMsg(status, url, message);
    }
  },
  (error: AxiosError): Promise<ResponseErrorConfig> => {
    const url = error.config.url || "暂无接口";
    if (error && error.response) {
      const { status } = error.response;
      return throwErrorMsg(status, url, error.message);
    } else {
      return Promise.reject({
        code: 0,
        message: `接口:${url}网络异常，请检查后重试！`,
      });
    }
  }
);

export default instance;
