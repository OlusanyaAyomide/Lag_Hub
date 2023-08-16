import React from 'react'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Separator } from '../ui/separator'
import { Icons } from '@/utils/icons'
import UserAvatar from '../utils/UserAvatar'

export default function IsShared() {
  return (
    <div className='flex  border-b pb-3  pad'>
        <UserAvatar className='h-7 w-7'/>
        <h1 className='font-light  text-[13px] ml-3 pr-4'><span>Johnson ayomide Reposted this tester tester</span> <span><Icons.arrowLeft className='text-main inline ml-1'/></span></h1>
        {/* <Separator className='my-3 mx-auto'/> */}
    </div>
  )
}
