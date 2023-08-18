import React from 'react'
import { Avatar, AvatarFallback,AvatarImage } from '../ui/avatar'
import { Icons } from '@/utils/icons'
import UserAvatar from '../utils/UserAvatar'
import { trimSentence } from '@/lib/utils'

interface IProfileInfo{
  firstName?:string
  lastName?:string
  description?:string
  time?:string  
  src?:string
  followers?:string
  isVideo?:boolean
}

export default function ProfileInfo({
  firstName="Johnson",lastName="Doris",description="web developer and ...",
  time="2wago",src="/profile.png",followers = "220 followers",isVideo=false
  }:IProfileInfo){
    const isSponsred=false
    const generated =false
  return (
    <div className="flex-center justify-between pt-3">
    <div className='flex-center max-sm:w-[220px]'>
    <UserAvatar className='h-11 w-11' src={src}/>
    <div className='ml-2 flex flex-col text-xs '>
        <span className="font-semibold text-sm big-text">{firstName} {lastName}</span>
        <span className='font-light'>{trimSentence(description)}</span>
        <h1 className='flex-center'>{isSponsred?"Sponsored post":<span className='whitespace-nowrap flex'>
          {followers} {<Icons.arrowUp className='text-sm text-main'/>}  <span className='ml-3 tinytext'>{time}</span></span>}</h1>
    </div>
    </div>
    {!isVideo && <button className='flex-center  hover:text-main bounceup'>Follow <Icons.follow className='ml-1 text-main'/></button>}
  </div>
 
  )
}
