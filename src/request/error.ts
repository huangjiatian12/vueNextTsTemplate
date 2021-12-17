import { InterceptorsConfig } from "../types";

function getErrorMessage(url: string, message: string) {
  return `url: ${url}, error: ${message}`;
}

function interceptor404(url: string, message: string) {
  console.log("拦截了404");
  return Promise.reject({ code: 404, message: getErrorMessage(url, message) });
}

function headerError(url: string, message: string) {
  return Promise.reject({ code: -1, message: getErrorMessage(url, message) });
}

function unKnowError(url: string) {
  return Promise.reject({
    code: -1,
    message: getErrorMessage(url, "未知错误"),
  });
}

function throwErrorMsg(status: number | string, url: string, message: string) {
  const interceptors: InterceptorsConfig = {
    404: interceptor404,
    headerError: headerError,
  };
  const throwFunc = interceptors[status];
  if (!throwFunc) return unKnowError(url);
  return throwFunc(url, message);
}

export default throwErrorMsg;
