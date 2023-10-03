import AuthLayout from '@/components/boarding/AuthLayout'
import BoardingLayout from '@/components/boarding/BoadringLayout'
import FieldButton from '@/components/boarding/FieldButton'
import { Button } from '@/components/ui/button'
import { Icons } from '@/utils/icons'
import { useGoogleLogin } from '@react-oauth/google'
import {useQuery,useMutation} from "@tanstack/react-query"
import { getUserCredentials as mutationFn } from '@/hooks/requests/googleRequests'
import {AxiosError, AxiosResponse} from "axios"
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
import { ISignIn } from '@/utils/interfaces'
import { useFormik } from 'formik'
import { validateSignIn as validate } from '@/components/utils/validator'
import {useState} from "react"
import Link from 'next/link'

export default function SignIn() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [isHidden,setIsHidden] = useState(true)
  const [errormessage,setErrorMessage] = useState("")
  
  const initialValues:ISignIn ={
    email:"",password:""
  }
  const onSuccess = async (res:AxiosResponse<ISignInResponse>)=>{
    const authCookie = Cookies.get("authCookie")
    const {user,token} = res.data?.data
    console.log("inheree")
    if (authCookie){
      Cookies.remove("authCookie")
    }
    await setCookieAsync(token)
    dispatch(userActions.setUserDetails(user))
    socket.auth = {token}
    socket.connect()
    router.push("/home")

  }

  const login = useGoogleLogin({
    onSuccess: (res) => mutate({token:res.access_token}),
    onError: (error) => console.log('Login Failed:', error)
  });

  const {mutate:signin,isLoading:isloading} = usePostRequest({mutationFn:signInRequest,onSuccess,
    onError:(res:AxiosError<{message:string}>)=>{
    const message = res.response?.data.message
    if(message){
      setErrorMessage(message)
    }
  }})

  const {isLoading,mutate} = useMutation(["google-request"],mutationFn,{
    onSuccess:({data:{email,id:password}}:AxiosResponse<IgoogleLogInResponse>)=>{
        signin({email,password})
    }
    })
    const loading = isLoading || isloading

    const formik =useFormik<ISignIn>({initialValues,
      validateOnChange:false,validateOnBlur:true,
      validate,
      onSubmit:({email,password})=>{
        signin({email,password})
      }
    })
  return (
    <BoardingLayout>
      <AuthLayout>
        <form onSubmit={formik.handleSubmit} className="pad py-8 relative z-20 ">
          <div className='pb-4 relative mb-2'>
            <h1 className="text-lg text-main font-semibold text-center">Welcome Back</h1>
            {errormessage && <h1 className='absolute font-medium w-full bottom-0 text-center text-xs text-red-500'>{errormessage}</h1>}
          </div>
        
          <div>
            <FieldButton 
              text='Email Address'
              placeholder='example@gmail.com'
              value={formik.values.email}
              name='email'
              type='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email?formik.errors.email:""}
            />

            <FieldButton 
              text='Password'
              type={isHidden?"password":"text"}
              value={formik.values.password}
              name='password'
              placeholder='******'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password?formik.errors.password:""}
            >
              <button type="button" onClick={()=>{setIsHidden((prev=>!prev))}} className='absolute top-[36px]  right-2 text-shade text-xl'>
                {isHidden?<Icons.seeeye/>:<Icons.dasheye/>}
              </button>
            </FieldButton>

            <Button 
              disabled={loading} type='submit' className='text-white flex justify-center mt-8 bg-main hover:bg-blue-500 items-center w-full'>{loading?<RadioLoader/>:"Sign In"}
            </Button>
            <Button disabled={loading} onClick={()=>{login()}} type='button' className='border mt-2 bg-gray-50 dark:bg-gray-600  flex justify-center hover:bg-gray-100 dark:hover:bg-gray-500 w-full'>
              <span className='text-foreground'>Sign in with Google</span>
              <span className='ml-2 text-xl'>{<Icons.google/>}</span>
            </Button>
          </div>
        </form>
        <Link href={"/boarding/signup"} >
          <h1 className="text-center text-main text-xs mb-5 mt-6">No account yet? sign up</h1>
        </Link>
       
      </AuthLayout>
    </BoardingLayout>
  )
}

//value='lamzyemail@gmail.com'
//  value='password'