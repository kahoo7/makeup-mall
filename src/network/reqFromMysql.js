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


//返回一个Promise(发送post请求)
export function fetchPost(url, params) {
  return new Promise((resolve, reject) => {
    axios.defaults.baseURL = 'http://localhost:3000/';
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; 
    axios.post(url, params)
      .then(response => {
          resolve(response.data);
      }, err => {
          reject(err);
      })
      .catch((error) => {
          reject(error)
      })
  })
}

////返回一个Promise(发送get请求)
export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.defaults.baseURL = 'http://localhost:3000/';
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; 
    axios.get(url, {params: param})
      .then(response => {
          resolve(response.data)
      }, err => {
          reject(err)
      })
      .catch((error) => {
          reject(error)
      })
  })
}
