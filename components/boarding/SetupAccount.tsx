import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { layoutActions } from '@/store/layoutSlice'
import React,{useState,useRef,useEffect, useCallback} from 'react'
import { getRandomItem, isBlob } from '@/lib/utils'
import { avatarLists, colorTheme } from '@/utils/constants'
import { useHydration } from '@/hooks/useHydration'
import { Avatar, AvatarImage,AvatarFallback  } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Icons } from '@/utils/icons'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { usePostRequest } from '@/hooks/useRequestProcessor'
import { cloudinaryUploader } from '@/utils/cloudinaryUpload'
import { IResponse } from '@/utils/cloudinaryUpload'
import { AxiosResponse,AxiosError } from 'axios'
import { imgUrl } from '@/utils/tempKeys'
import DotLoader from '../utils/spinners/DotLoader'
import { userSignUp as mutationFn } from '@/hooks/requests/endPoints'
import {  ISignInResponse } from '@/utils/responeInterface'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { userActions } from '@/store/authSlice'
import { setCookieAsync } from '@/lib/utils'
import socket from '@/sockets/sockets'

export default function SetupAccount() {
    const {signUpValue} = useAppSelector((state=>state.layout))
    const dispatch = useAppDispatch()
    const ref = useRef<HTMLInputElement>(null)
    const spanref =useRef<HTMLSpanElement>(null)
    const [avatar,setAvatar] = useState<string>(getRandomItem(avatarLists))
    const [avaratFile,setAvatarFile] = useState<File | null>(null)
    const [avatarTheme,setAvatarTheme] = useState<string>(getRandomItem(colorTheme))
    const {isRendered} = useHydration()
    const [avatrtOpen,setAvatarOpen] = useState(false)
    const [errormessage,setErrorMessage] = useState("")
    const router = useRouter()
    
  
    const handleUpload =(e:React.ChangeEvent<HTMLInputElement>)=>{
        const files = e.target.files
        if(!files){return}
        const file = files[0]
        revokeUrl()
        const url = URL.createObjectURL(file)
        setAvatar(url)
        setAvatarFile(file)   
        setAvatarOpen(false)
    }

    const handleSubmit = ()=>{
        if(avaratFile){
            upload({file:avaratFile,type:"image"})
            return 
        }
        mutate({...signUpValue,profileImage:avatar,profileTheme:avatarTheme})
    
    }

    const {mutate:upload,isLoading} = usePostRequest({mutationFn:cloudinaryUploader,
        onSuccess:({data}:AxiosResponse<IResponse>)=>{
        const imgurl = `${imgUrl}${data.public_id}`
        mutate({...signUpValue,profileImage:imgurl,profileTheme:avatarTheme})
        
    }})

    const {mutate,isLoading:Loading} = usePostRequest({mutationFn,
        onSuccess:async ({data:{data}}:AxiosResponse<ISignInResponse>)=>{
            const authCookie = Cookies.get("authCookie")
            const {user,token} = data
            if (authCookie){
              Cookies.remove("authCookie")
            }
            await setCookieAsync(token)
            dispatch(userActions.setUserDetails(user))
            socket.auth = {token}
            socket.connect()
            router.push("/home")
    },onError:(res:AxiosError<{message:string}>)=>{
        const message = res.response?.data.message
        if(message){
          setErrorMessage(message)
        }
      }
    })

    const revokeUrl = useCallback(()=>{
        if(isBlob(avatar)){
            URL.revokeObjectURL(avatar)
        }
    },[avatar])

    useEffect(()=>{return ()=>{revokeUrl()}},[revokeUrl])


  return (
    <div className='pad pb-4  pt-2 relative z-20'>
        <button onClick={()=>{dispatch(layoutActions.backtoSignUp())}}
         className="mb-2 -ml-2 text-shade block hover:text-foreground px-2 text-2xl">
            <Icons.back/>
        </button>
        <div className='pb-4 relative mb-2'>
            <h1 className="text-lg text-main font-semibold text-center">Set Up account</h1>
            {errormessage && <h1 className='absolute font-medium w-full bottom-0 text-center text-xs text-red-500'>{errormessage}</h1>}
            <div>
            <div className="relative pt-4">
                {isRendered && 
                    <Avatar className='h-32 w-32 sm:h-36 sm:w-36 block mx-auto shrink-0 relative' style={{backgroundColor:avatarTheme}}>
                        <AvatarFallback>GC</AvatarFallback>
                        <AvatarImage src={avatar}/>
                    </Avatar>
                }
                <Popover open={avatrtOpen}>
                    <PopoverTrigger asChild>
                        <div>
                            <Button onClick={()=>{setAvatarOpen(true)}} variant={"ghost"} className='flex  items-center h-8 mt-1 px-6 mx-auto'>
                                <span>Change Avatar</span>
                                <span className='text-xl ml-2 text-main'><Icons.pencil/></span>
                            </Button>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent  className='pad pb-4 pt-1 relative top-2'>
                        <button onClick={()=>{setAvatarOpen(false)}} className='block text-xl mb-3 ml-auto text-shade hover:text-foreground '>
                            <Icons.cancel/>
                        </button>
                        <h1 className="font-semibold mb-3 text-center">Select from our list of avatars or upload a custom image</h1>
                        <div className="flex flex-wrap justify-between mt-1 sm:mt-2">
                           {avatarLists.map((item,key)=>(
                                <Avatar onClick={()=>{
                                    setAvatarOpen(false)
                                    setAvatarFile(null);
                                    setAvatar(item)}} 
                                    key={key} 
                                    className='h-12 w-12 mb-2 border bg-blue-200 cursor-pointer'>
                                    <AvatarFallback>GC</AvatarFallback>
                                    <AvatarImage src={item}/>
                                </Avatar>    
                           ))}
                        </div>
                        <button onClick={()=>{setAvatarOpen(false)}} className='block ml-1 sm:hidden text-xl mb-3 mr-auto text-shade hover:text-foreground '>
                            <Icons.cancel/>
                        </button>
                        <Button onClick={()=>{ref.current?.click()}} className='w-full flex justify-center mt-4 text-white bg-main hover:bg-blue-500'>
                            <span>Upload cusotom image</span>
                            <span className='text-xl ml-2'><Icons.picture/></span>
                        </Button>
                        <input accept="image/*" onChange={handleUpload} type="file" className='hidden' ref={ref}/>
                    </PopoverContent>
                </Popover>
                <h1 className="text-center font-semibold mt-2 text-sm">{signUpValue.username}</h1>
                <div onClick={()=>{spanref.current?.click()}} className='justify-center flex-center cursor-pointer hover:bg-accent rounded-md w-fit mx-auto px-6 py-[2px]'>
                    <div className='mr-5 flex-center'>
                        <span>Change Theme</span>
                        <span><Icons.pallete className='text-lg text-main'/></span>
                    </div>
                    <div className="flex-center">
                    {isRendered && <div className="h-[14px] w-[14px] rounded-sm" style={{background:avatarTheme}}></div>}
                        <Popover>
                            <PopoverTrigger asChild>
                                <span className='text-xl' ref ={spanref}>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Icons.pencil className='text-shade hidden'/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <span>Edit theme</span>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </span>
                            </PopoverTrigger>
                            <PopoverContent className='pad py-2'>
                                <h1 className="font-medium">Choose color</h1>
                                <div className="flex justify-between flex-wrap">
                                    {colorTheme.map((item,key)=>(
                                        <div key={key} 
                                            onClick={()=>{setAvatarTheme(item)}}
                                            style={{backgroundColor:item}} 
                                            className="cursor-pointer h-8 opacity-80 mb-1 w-8 rounded-full">
                                        </div>
                                    ))}
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Button disabled={(Loading || isLoading)} onClick={handleSubmit} className='w-full bg-main hover:bg-blue-500 text-white shadow-sm mt-6 mb-3'>
         {(Loading || isLoading)?<DotLoader color='#ffffff'/>:<span>Proceed to dashboard</span>}  
        </Button>
    </div>
  )
}
