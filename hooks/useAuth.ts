import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { useGetRequest } from "./useRequestProcessor";
import { profileRequests as queryFn} from "./requests/endPoints";
import { useRouter } from "next/router";
import { AxiosResponse } from "axios";
import { IProfileResponse } from "@/utils/responeInterface";
import { userActions } from "@/store/authSlice";
import socket from "@/sockets/sockets";
import Cookies from "js-cookie";



export const useAuth = ()=>{
    const router = useRouter()
    const {isAuthenticated} = useAppSelector((state=>state.user))
    const dispatch = useAppDispatch()

    const {} = useGetRequest({queryKey:['user-profile'],queryFn,enabled:!isAuthenticated,onSuccess:(res:AxiosResponse<IProfileResponse>)=>{
        const {user} = res.data.data
        console.log("Setting -user")
        dispatch(userActions.setUserDetails(user))
        const authCookie = Cookies.get("authCookie")
        socket.auth = {token:authCookie}
        socket.connect()
    },onError:()=>{
        console.log("here")
        router.push("/boarding/signin")
    }})
}