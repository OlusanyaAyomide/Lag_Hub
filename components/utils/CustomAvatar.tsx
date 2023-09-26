import React from 'react'
import { Avatar,AvatarFallback,AvatarImage } from '../ui/avatar'
import { cn } from '@/lib/utils'


export default function CustomAvatar({className,src}:{className?:string,src:string}) {
  return (
    <Avatar 
        className={cn(``,className)}>
      <AvatarFallback>Lh</AvatarFallback>
      <AvatarImage src={src}/>
  </Avatar>
  )
}
