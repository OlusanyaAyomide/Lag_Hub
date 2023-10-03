import { IUserRequest } from "@/store/interfaces"
import request from "./requests"
import { AxiosResponse} from "axios"
import { IProfileEdit } from "@/utils/interfaces"

export const signInRequest = (body:{email:string,password:string})=>{
    return request.post<AxiosResponse<any>>("/user/login",body)
}

export const checkExistingUser=(body:{email:string,username:string,isgoogle:boolean})=>{
    return request.post<AxiosResponse<any>>("/user/getusername",body)
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

export const getCommunityRequest=(slug:string)=>{
    return request.get<AxiosResponse<any>>(`/community/${slug}`)
}

export const getCommunityUser=(customId:string)=>{
    return request.get<AxiosResponse<any>>(`/community/users/${customId}`)
}

export const getDmList = ()=>{
    return request.get<AxiosResponse<any>>('/user/dm')
}


export const getPrivateChats = (username:string)=>{
    return request.get<AxiosResponse<any>>(`/user/chat/${username}`)
}

export const getReels = (page:number)=>{
    return request.get<AxiosResponse<any>>(`/service/tiktok/?page=${page}`)
}


export const getUserProfile=(username:string)=>{
    return request.get<AxiosResponse<any>>(`/user/profilepage/${username}`)
}

export const userSignUp=(body:IUserRequest)=>{
    return request.post<AxiosResponse<any>>('/user/signup',body)
}

export const followUser=(body:{_id:string})=>{
    return request.post<AxiosResponse<any>>('/user/follow',body)
}


export const editProfileRequest=(body:IProfileEdit)=>{
    return request.post<AxiosResponse<any>>('/user/update',body)
}


export const notificationRequest=()=>{
    return request.get<AxiosResponse<any>>(`/user/notification`)
}