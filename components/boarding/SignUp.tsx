import FieldButton from '@/components/boarding/FieldButton'
import { Button } from '@/components/ui/button'
import { Icons } from '@/utils/icons'
import { useGoogleLogin } from '@react-oauth/google'
import {useMutation} from "@tanstack/react-query"
import { getUserCredentials as mutationFn } from '@/hooks/requests/googleRequests'
import {AxiosError, AxiosResponse} from "axios"
import { IExisitingUser,IgoogleResponse } from '@/utils/responeInterface'
import RadioLoader from '@/components/utils/RadioLoader'
import { checkExistingUser } from '@/hooks/requests/endPoints'
import { usePostRequest } from '@/hooks/useRequestProcessor'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import {  ISignUp } from '@/utils/interfaces'
import { useFormik } from 'formik'
import { validateSignUp as validate } from '@/components/utils/validator'
import {useState} from "react"
import { layoutActions } from '@/store/layoutSlice'
import Link from 'next/link'
import { capitalizeFirstLetter } from '@/lib/utils'

export default function SignUp() {
  const dispatch = useAppDispatch()
  const [isHidden,setIsHidden] = useState(true)
  const [errormessage,setErrorMessage] = useState("")
  const {signUpValue} = useAppSelector((state=>state.layout))
  const [googleInfo,setGoogleInfo] = useState<ISignUp | null>()
  

    const login = useGoogleLogin({
      onSuccess: (res) => mutate({token:res.access_token}),
      onError: (error) => console.log('Login Failed:', error)
    });

  const {mutate:signup,isLoading:isloading} = usePostRequest({mutationFn:checkExistingUser,
    onSuccess:async ({data:{data:{username}}}:AxiosResponse<IExisitingUser>)=>{
        const userdata:ISignUp = googleInfo?{...googleInfo,username}:{...formik.values,username}
        dispatch(layoutActions.setSignupvalues(userdata))
    },
    onError:(res:AxiosError<{message:string}>)=>{
        const message = res.response?.data.message
        if(message){
            setErrorMessage(message)
        }
    }})

  const {isLoading,mutate} = useMutation(["google-request"],mutationFn,{
    onSuccess:({data}:AxiosResponse<IgoogleResponse>)=>{
        const name = `${data.given_name}${data.family_name}`
        const username =  capitalizeFirstLetter(name)
        console.log(username)
        signup(
            {username,email:data.email,isgoogle:true}
        )
        const userInfo :ISignUp={
            username,email:data.email,password:data.id,firstName:data.given_name,lastName:data.family_name
        }
        setGoogleInfo(userInfo)
    }})
    

    const formik =useFormik<ISignUp>({initialValues:signUpValue,
      validateOnChange:false,validateOnBlur:true,enableReinitialize:true,
      validate,
      onSubmit:(values)=>{
        setGoogleInfo(null)
        signup({username:values.username,email:values.email,isgoogle:false})
      }
    })
    const loading = isLoading || isloading
  return (
    <form onSubmit={formik.handleSubmit} className="pad py-8 relative z-20 ">
      <div className='pb-4 relative mb-2'>
        <h1 className="text-lg text-main font-semibold text-center">Let&apos;s get Started</h1>
        {errormessage && <h1 className='absolute font-medium w-full bottom-0 text-center text-xs text-red-500'>{errormessage}</h1>}
      </div>
    
      <div>
        <FieldButton 
          text='First Name'
          placeholder='johnson'
          value={formik.values.firstName}
          name='firstName'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.firstName?formik.errors.firstName:""}
        />
        <FieldButton 
          text='Last Name'
          placeholder='doris'
          value={formik.values.lastName}
          name='lastName'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.lastName?formik.errors.lastName:""}
        />
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
          text='Username'
          placeholder='johnsondoris'
          value={formik.values.username}
          name='username'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username?formik.errors.username:""}
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
          disabled={loading} type='submit' className='text-white flex justify-center mt-8 bg-main hover:bg-blue-500 items-center w-full'>{loading?<RadioLoader/>:"Sign up"}
        </Button>
        <Button disabled={loading} onClick={()=>{login()}} type='button' className='border mt-2 bg-gray-50 dark:bg-gray-600  flex justify-center hover:bg-gray-100 dark:hover:bg-gray-500 w-full'>
          <span className='text-foreground'>Sign up with Google</span>
          <span className='ml-2 text-xl'>{<Icons.google/>}</span>
        </Button>
      </div>
      <Link href={"/boarding/signin"} >
          <h1 className="text-center text-main text-xs mt-6">already have an account? sign in</h1>
      </Link>
    </form>
)}

