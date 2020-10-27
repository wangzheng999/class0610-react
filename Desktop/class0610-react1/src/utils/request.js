 // 封装axios 定义拦截器
 import axios from "axios"
 const request = axios.create({
     baseURL:'/'
 })
 // 先触发请求拦截器  - 发送请求 - 响应拦截器 - 触发then/catch/await.
 // 请求拦截器  设置公共的请求参数，请求头
 request.interceptors.request.use(
     (config)=>{
         // config 是请求的所有的信息
         // 
         return config;
     }
 );
 // x响应拦截器
 request.interceptors.response.use(
     // 成功 看响应状态码决定响应成功和失败
     // 2xx-299都为成功
    (response)=>{
        if(response.data.code===20000){
            return response.data.data;
        }else{
            return Promise.reject(response.data.message);
        }
    },
    // 失败 非2xx
    (error)=>{
        console.log(error.message.status); // 响应状态码
        // 401{未授权 找不到token或者token过期} 403{禁止访问forbidden}
        //  404{地址写错 找不到}  500{服务器出错}
        if(error.message){
            if(error.message.status===401){

            }
        }else{

        }
    }
 )
 export default request;