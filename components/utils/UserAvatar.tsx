import { Avatar,AvatarFallback,AvatarImage } from '../ui/avatar'
import React from 'react'

export default function UserAvatar({className}:{className?:string}) {
  return (
    <Avatar className={className}>
        <AvatarFallback>Lh</AvatarFallback>
        <AvatarImage src='/profile.png'/>
    </Avatar>
  )
}
