import { Avatar,AvatarFallback,AvatarImage } from '../ui/avatar'
import React from 'react'

export default function UserAvatar({className,src="/profile.png"}:{className?:string,src?:string}) {
  return (
    <Avatar className={className}>
        <AvatarFallback>Lh</AvatarFallback>
        <AvatarImage src={src}/>
    </Avatar>
  )
}
