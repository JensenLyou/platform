import axios from "axios";
import store from "./../store.js";
import { Message } from "element-ui";

// 创建axios实例
const service = axios.create({
  baseURL: "/base/v1", // process.env.BASE_API, // base的base_url
  // baseURL: "/", 
  timeout: 10 * 1000, // 请求超时时间
  withCredentials: true // 是否允许带cookie
});

// request拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    // 设置本地语言
    config.headers["language"] = store.state.language;
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
// response拦截器
service.interceptors.response.use(res => {
  // 对响应数据做点什么
  if (res.status == 200 ) {
    if (res.data && !res.data.status) {
      if (res.config.url.indexOf("/sign/getSignStatus") < 0) {
        Message.error(res.data.msg || "error: 1001");
      }
      return Promise.reject(res);
    }
  } else {
    // 对响应错误做点什么
    return Promise.reject(res);
  }
  return res;
});

export default service;
