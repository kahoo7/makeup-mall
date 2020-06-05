import axios from 'axios'

export function requests(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/n3'
  })

  // 2.axios拦截器
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求 
  return instance(config)
}