import axios from 'axios'
import qs from 'qs'
import {  message  } from 'ant-design-vue'
import * as _ from '@/assets/js/config'
import router from '@/router'

const fetch = axios.create({
    timeout: 30000,
    baseURL: window.BASE_URL,
    // baseURL: 'https://loadtest.eimageglobal.com/remoteEdu/',
    // 请求头
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded',
        'withCredentials': true
    }
})
// http请求拦截器
// fetch.interceptors.request.use(config => {

//   if (config.method === 'post') {
//     config.data = qs.stringify(config.data, {arrayFormat: 'repeat'})
//   }
//   return config
// }, error => {
//   message.error({
//     message: '加载超时'
//   })
//   return Promise.reject(error)
// })

// 添加响应拦截器
fetch.interceptors.response.use((res) => {
    if (res.data.code === _.ERR_OK) {
      return res
    } else if (res.data.code === _.ERR_TIMEOUT || res.data.code === _.ERR_ERR) {
        
      router.push('/')

    } else if(res.data.code === _.ERR_server || res.data.code === _.ERR_PARMS ){
        //
    }else {
      message.error(res.data.msg)
    }
    return res
  }, (err) => {
    if (!err.response) {
      message.error('请求超时，请稍后重试')
    } else if (err.response.status >= 500) {
      message.error('服务器开了个小差，请稍后重试')
    } else if (err.response.status === 404) {
      message.error('请求地址不存在')
    } else if (err.response.status >= 400) {
      message.error('请求错误，请检查参数或请求头')
    }
    return Promise.reject(err)
  })
  

export default {
    //type post get json  file 
    fetch(url, params, type) {
        return new Promise((resolve, reject) => {
            switch (type.toLowerCase()) {
                case "post":
                    if(params){
                        params = qs.stringify(params, {arrayFormat: 'repeat'})
                    }
                    fetch.post(url, params)
                    .then(response => {
                        resolve(response)
                    })
                    .catch((error) => {
                        reject(error)
                    })
                    break;
                case "get":    
                    params = params || {}
                    fetch.get(url, {params})
                    .then(response => {
                        resolve(response)
                    })
                    .catch((error) => {
                        reject(error)
                    })
                    break;
                case "json": 
                    params = params?JSON.stringify(params): ""; 
                    fetch.post( url, params,  {headers: {'Content-Type': 'application/json'}})//设置header信息
                    .then(response => {
                        resolve(response)
                    })
                    .catch((error) => {
                        reject(error)
                    })
                    break;
                case "file":
                    if( !params ||  !(params instanceof  FormData ) ){
                        console.error("传入参数类型错误，上传文件请传入FormData类型参数")
                        return;
                    }
                    fetch.post( url,  params, {headers: {'Content-Type': 'multipart/form-data'}})    //设置header信息
                    .then(response => {
                        resolve(response)
                    })
                    .catch((error) => {
                        reject(error)
                    })
                    break;
            
                default:
                    break;
            }
        })
    }

}

  