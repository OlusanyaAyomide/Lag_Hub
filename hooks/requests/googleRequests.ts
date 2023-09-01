import { IgoogleResponse } from "@/utils/responeInterface"
import axios from "axios"

export const getUserCredentials = ({token}:{token:string})=>{
    return axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
    {
       headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
        } 
    }
    ) 
}