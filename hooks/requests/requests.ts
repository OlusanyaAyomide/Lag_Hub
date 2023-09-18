import axios,{InternalAxiosRequestConfig,AxiosResponse, AxiosError, AxiosRequestConfig, AxiosInstance} from "axios"
import Cookies from "js-cookie"
// import {parseCookies} from "nookies"


// Intercepting all axios request and adding cookies to headers if it exists
const onRequest=(config:InternalAxiosRequestConfig):InternalAxiosRequestConfig=>{
  const {method,url} = config
  const authCookie = Cookies.get("authCookie")
  if (authCookie){
    console.log("here")
      config.headers["Authorization"] = `Bearer ${authCookie}`
  }
//   config.headers["Content-Type"] = "application/json"
 
  return config
}
const onResponse = (response:AxiosResponse):AxiosResponse=>{
  const {method,url} = response.config
  const {status} = response
  console.log(status)
  return response
}

const onErrorResponse = (error:AxiosError|Error):Promise<AxiosError>=>{
  if (axios.isAxiosError(error)){
    const {message} = error
    const {method,url} = error.config as AxiosRequestConfig
    const {statusText,status} = error.response as AxiosResponse ?? {}
    console.log(`${method?.toUpperCase()} ${url} | Error ${status} ${message}`)
    if (status===401){console.log("LogIn Required")}
  }
  // throw new Error(error.message)
  return Promise.reject(error)
}

// const baseURL = "https://laghub-backend.onrender.com/api/v1"
const baseURL ="http://localhost:4000/api/v1"
const request = axios.create({
  baseURL,
  headers:{
    "Content-Type":"application/json"
  }
})
request.interceptors.request.use(onRequest,onErrorResponse)
request.interceptors.response.use(onResponse,onErrorResponse)


export default request
