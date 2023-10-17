import axios,{InternalAxiosRequestConfig,AxiosResponse, AxiosError, AxiosRequestConfig} from "axios"
import Cookies from "js-cookie"



// Intercepting all axios request and adding cookies to headers if it exists
const onRequest=(config:InternalAxiosRequestConfig):InternalAxiosRequestConfig=>{
  const {method,url} = config
  const authCookie = Cookies.get("authCookie")
  if (authCookie){
      config.headers["Authorization"] = `Bearer ${authCookie}`
  }
//   config.headers["Content-Type"] = "application/json"
 
  return config
}
const onResponse = (response:AxiosResponse):AxiosResponse=>{
  const {method,url} = response.config
  const {status} = response
  return response
}

const onErrorResponse = (error:AxiosError|Error):Promise<AxiosError>=>{
  if (axios.isAxiosError(error)){
    const {message} = error
    const {method,url} = error.config as AxiosRequestConfig
    const {statusText,status} = error.response as AxiosResponse ?? {}
  }
  return Promise.reject(error)
}

const baseURL = "https://laghub-backend.onrender.com/api/v1"
// const baseURL = 'https://laghub-backend.adaptable.app/api/v1'
// const baseURL ="http://localhost:4000/api/v1"
const request = axios.create({
  baseURL,
  headers:{
    "Content-Type":"application/json"
  }
})
request.interceptors.request.use(onRequest,onErrorResponse)
request.interceptors.response.use(onResponse,onErrorResponse)


export default request
