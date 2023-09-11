import request from "./requests"
import {AxiosResponse} from "axios"

export const signInRequest = (body:{email:string,password:string})=>{
    return request.post<AxiosResponse<any>>("/user/login",body)
}

export const makePostrequest=(body:any)=>{
    return request.post<AxiosResponse<any>>("/post/create",body)
}

export const getPostsRequest=()=>{
    return request.get<AxiosResponse<any>>("/post/all")
}

export const profileRequests=()=>{
    return request.get<AxiosResponse<any>>("/user/profile")
}

export const likeRequests = (body:{post:string})=>{
    return request.post<AxiosResponse<any>>("/post/like",body)
}