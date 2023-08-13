import React from 'react'
import { Avatar, AvatarFallback,AvatarImage } from '../ui/avatar'
import { Icons } from '@/utils/icons'

export default function ProfileInfo() {
    const isSponsred=false
    const generated =false
  return (
    <div className="flex-center justify-between pt-3">
    <div className='flex-center'>
    <Avatar className='h-11 w-11'>
      <AvatarImage src='/profile.png'/>
      <AvatarFallback>Lh</AvatarFallback>
     </Avatar>
    <div className='ml-2 flex flex-col text-xs'>
        <span className="font-semibold text-sm big-text">Johnson Doris</span>
        <span className='font-light'>Web developer and ...</span>
        <h1 className='flex-center'>{isSponsred?"Sponsored post":<span className='whitespace-nowrap flex'>22 Followers {<Icons.arrowUp className='text-sm text-main'/>}</span>}</h1>
    </div>
    </div>
    <button className='flex-center hover:text-main bounceup'>Follow <Icons.follow className='ml-1 text-main'/></button>
  </div>
 
  )
}