import AuthLayout from '@/components/boarding/AuthLayout'
import BoardingLayout from '@/components/boarding/BoadringLayout'
import FieldButton from '@/components/boarding/FieldButton'
import { Button } from '@/components/ui/button'
import { Icons } from '@/utils/icons'
import { useGoogleLogin } from '@react-oauth/google'
import {useQuery,useMutation} from "@tanstack/react-query"
import { getUserCredentials as mutationFn } from '@/hooks/requests/googleRequests'
import {AxiosResponse} from "axios"
import { ISignInResponse, IgoogleLogInResponse } from '@/utils/responeInterface'
import RadioLoader from '@/components/utils/RadioLoader'
import { signInRequest} from '@/hooks/requests/endPoints'
import { usePostRequest } from '@/hooks/useRequestProcessor'
import { useAppDispatch } from '@/hooks/reduxHooks'
import { useRouter } from 'next/router'
// import { setCookie,destroyCookie,parseCookies } from 'nookies'
import Cookies from "js-cookie"
import { userActions } from '@/store/authSlice'
import socket from '@/sockets/sockets'
import { setCookieAsync } from '@/lib/utils'

export default function SignIn() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  
  const onSuccess = async (res:AxiosResponse<ISignInResponse>)=>{
    const authCookie = Cookies.get("authCookie")
    const {user,token} = res.data?.data
    console.log("inheree")
    if (authCookie){
      Cookies.remove("authCookie")
    }
    await setCookieAsync(token)
    // console.log("afterSet",parseCookies().authCookie)
    dispatch(userActions.setUserDetails(user))
    socket.auth = {token}
    socket.connect()
    router.push("/")

  }

  const login = useGoogleLogin({
    onSuccess: (res) => mutate({token:res.access_token}),
    onError: (error) => console.log('Login Failed:', error)
  });

  const {mutate:signin,isLoading:isloading} = usePostRequest({mutationFn:signInRequest,onSuccess})

  const {isLoading,mutate} = useMutation(["google-request"],mutationFn,{
    onSuccess:({data:{email,id:password}}:AxiosResponse<IgoogleLogInResponse>)=>{
        signin({email,password})
    }
    })
    const loading = isLoading || isloading
  return (
    <BoardingLayout>
      <AuthLayout>
        <form className="pad py-8 relative z-20 ">
          <h1 className="text-lg text-main font-semibold text-center pb-4">Welcome Back</h1>
          <div>
            <FieldButton 
              text='Email Address'
              placeholder='example@gmail.com'
            />
            <FieldButton 
              text='Password'
              type='password'
              placeholder='******'
            />
            <Button disabled={loading} type='button' className='text-white flex justify-center mt-8 bg-main hover:bg-blue-500 items-center w-full'>{loading?<RadioLoader/>:"Sign In"}</Button>
            <Button disabled={loading} onClick={()=>{login()}} type='button' className='border mt-2 bg-gray-50 dark:bg-gray-600  flex justify-center hover:bg-gray-100 dark:hover:bg-gray-500 w-full'>
              <span className='text-foreground'>Sign in with Google</span>
              <span className='ml-2 text-xl'>{<Icons.google/>}</span>
            </Button>

          </div>
        </form>
      </AuthLayout>

    </BoardingLayout>
  )
}
