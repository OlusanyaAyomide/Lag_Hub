import request from "./requests"
import {AxiosResponse} from "axios"

export const signInRequest = (body:{email:string,password:string})=>{
    return request.post<AxiosResponse<any>>("/user/login",body)
}

export const makePostrequest=(body:any)=>{
    return request.post<AxiosResponse<any>>("/post/create",body)
}

export const getPostsRequest=(page:number)=>{
    return request.get<AxiosResponse<any>>(`/post/all?page=${page}`)
}

export const profileRequests=()=>{
    return request.get<AxiosResponse<any>>("/user/profile")
}

export const likeRequests = (body:{post:string})=>{
    return request.post<AxiosResponse<any>>("/post/like",body)
}

export const postInfoRequest = (postId:string)=>{
    return request.get<AxiosResponse<any>>(`/post/detail/${postId}`)
}


export const createPostMessage=(body:{post:string,text:string})=>{
    return request.post<AxiosResponse<any>>("/post/create-message",body)   
}

export const createPostReply=(body:{post:string,text:string})=>{
    return request.post<AxiosResponse<any>>("/post/create-reply",body)   
}

export const getActiveCommunities=()=>{
    return request.get<AxiosResponse<any>>("/community/active")
}


export const addNewCommunity=(body:{name:string,description:string,communityImage:string})=>{
    return request.post<AxiosResponse<any>>("/community/create",body)
}