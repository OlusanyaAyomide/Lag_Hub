import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'
import React from 'react'

export default function UserAvatar() {
  return (
    <Avatar>
        <AvatarImage src='profile.png'/>
        <AvatarFallback>Lh</AvatarFallback>
    </Avatar>
  )
}
