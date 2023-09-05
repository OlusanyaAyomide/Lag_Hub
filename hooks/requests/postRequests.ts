import request from "./requests"
import {AxiosResponse} from "axios"

export const signInRequest = (body:{email:string,password:string})=>{
    return request.post<AxiosResponse<any>>("/user/login",body)
}

