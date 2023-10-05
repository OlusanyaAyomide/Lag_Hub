import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { useGetRequest } from "./useRequestProcessor";
import { profileRequests as queryFn} from "./requests/endPoints";
import { useRouter } from "next/router";
import { AxiosResponse } from "axios";
import { IProfileResponse } from "@/utils/responeInterface";
import { userActions } from "@/store/authSlice";
import socket from "@/sockets/sockets";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import { layoutActions } from "@/store/layoutSlice";
import { privateChatActions } from "@/store/privateChatSlice";


export const useAuth = ()=>{
    const router = useRouter()
    const {isAuthenticated} = useAppSelector((state=>state.user))
    const dispatch = useAppDispatch()
    const pathname = usePathname()
    const unprotected = pathname === "/boarding/signin" || pathname === "/boarding/signup" ||pathname === "/"

    const {isLoading} = useGetRequest({queryKey:['user-profile'],queryFn,enabled:!isAuthenticated,onSuccess:(res:AxiosResponse<IProfileResponse>)=>{
        const {user} = res.data.data
        dispatch(userActions.setUserDetails(user))
        dispatch(layoutActions.setAuthStatus("authenticated"))
        dispatch(privateChatActions.setUsername(user.username))
        const authCookie = Cookies.get("authCookie")
        socket.auth = {token:authCookie}
        socket.connect()
        if(unprotected){
            router.push("/home")
        }
    },onError:()=>{
        dispatch(layoutActions.setAuthStatus("unauthenticated"))
        if(!unprotected){
            router.push("/boarding/signin")
        }
        
    }})
    return isLoading
}