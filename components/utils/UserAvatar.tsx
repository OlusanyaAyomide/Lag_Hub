import { useAppSelector } from '@/hooks/reduxHooks'
import { Avatar,AvatarFallback,AvatarImage } from '../ui/avatar'
import React from 'react'
import { cn } from '@/lib/utils'
import { useHydration } from '@/hooks/useHydration'

interface IUserAvatar{
  className?:string
  src?:string
  theme?:string
  isPrivate?:boolean
}

export default function UserAvatar({className,src="/profile.png",isPrivate=true,theme}:IUserAvatar) {
  const {data:{profileImage,profileTheme}} = useAppSelector((state=>state.user))
  const avatarTheme = isPrivate?profileTheme:theme
  const avatarImage =  isPrivate?profileImage:src
  return (
    <>
      {profileImage  && <Avatar className={cn(``,className)} style={{backgroundColor:avatarTheme}}>
        <AvatarFallback>Lh</AvatarFallback>
        <AvatarImage src={avatarImage}/>
      </Avatar>}
    </>

  )
}
