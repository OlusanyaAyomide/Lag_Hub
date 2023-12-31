import axios,{InternalAxiosRequestConfig,AxiosResponse, AxiosError, AxiosRequestConfig, AxiosInstance} from "axios"
import Cookies from "js-cookie"


const onRequest=(config:InternalAxiosRequestConfig):InternalAxiosRequestConfig=>{
  const {method,url} = config
  const authCookie = Cookies.get("authCookie")
  if (authCookie){
      config.headers["Authorization"] = `Bearer ${authCookie}`
  }

 
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
    if (status===401){console.log("LogIn Required")}
  }

  return Promise.reject(error)
}


// const baseURL ="http://127.0.0.1:8000/"
const baseURL ="https://goconnect.pythonanywhere.com/"
const aiRequest = axios.create({
  baseURL,
  headers:{
    "Content-Type":"application/json"
  }
})
aiRequest.interceptors.request.use(onRequest,onErrorResponse)
aiRequest.interceptors.response.use(onResponse,onErrorResponse)


export default aiRequest
