import React from 'react'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Separator } from '../ui/separator'
import { Icons } from '@/utils/icons'

export default function IsShared() {
  return (
    <div className='flex  border-b pb-3  pad'>
        <Avatar className='h-7 w-7'>
            <AvatarImage  src='/profile.png'/>
            <AvatarFallback>Lh</AvatarFallback>
        </Avatar>
        <h1 className='font-light  text-[13px] ml-3 pr-4'><span>Johnson ayomide Reposted this tester tester</span> <span><Icons.arrowLeft className='text-main inline ml-1'/></span></h1>
        {/* <Separator className='my-3 mx-auto'/> */}
    </div>
  )
}