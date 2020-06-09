import axios from 'axios'

export function reqFromMysql(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://localhost:3000/'
  })

  // 2.axios拦截器
  instance.interceptors.request.use(config => {
    // console.log(config);
    // console.log('request interceptors');
    return config;
  }, err => {
    console.log(err);
  })

  instance.interceptors.response.use(config => {
    // console.log('response interceptors');
    return config.data;
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求 
  return instance(config)
}