import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { Avatar,AvatarFallback,AvatarImage } from '../ui/avatar'
import React from 'react'
import { cn } from '@/lib/utils'
import { useHydration } from '@/hooks/useHydration'
import { layoutActions } from '@/store/layoutSlice'
import Link from 'next/link'

interface IUserAvatar{
  className?:string
  src?:string
  theme?:string
  isPrivate?:boolean
  username?:string
}

export default function UserAvatar({className,src="/profile.png",isPrivate=true,theme,username}:IUserAvatar) {
  const {data:{profileImage,profileTheme,username:name}} = useAppSelector((state=>state.user))
  const dispatch = useAppDispatch()
  const handleToggle =()=>{
    dispatch(layoutActions.openAlert({content:"Ayomide liked your post",link:"/tester/abcd"}))
  }
  const avatarTheme = isPrivate?profileTheme:theme
  const avatarImage =  isPrivate?profileImage:src
  return (
    <>
      {profileImage  &&
      <Link href={`profile/${username || name }`}>
        <Avatar onClick={handleToggle}
        className={cn(``,className)} style={{backgroundColor:avatarTheme}}>
        <AvatarFallback>Lh</AvatarFallback>
        <AvatarImage src={avatarImage}/>
      </Avatar>
      </Link>
 }
    </>

  )
}
