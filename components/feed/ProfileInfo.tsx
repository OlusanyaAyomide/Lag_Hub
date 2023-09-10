import React from 'react'
import { Avatar, AvatarFallback,AvatarImage } from '../ui/avatar'
import { Icons } from '@/utils/icons'
import UserAvatar from '../utils/UserAvatar'
import { trimSentence } from '@/lib/utils'
import { IUser } from '@/store/interfaces'



export default function ProfileInfo(user:IUser){
    const isSponsred=false
    const generated =false
    const isVideo = false
  return (
    <div className="flex-center justify-between pt-3">
    <div className='flex-center max-sm:w-[220px]'>
    <UserAvatar className='h-11 w-11' isPrivate={false} src={user.profileImage} theme={user.profileTheme}/>
    <div className='ml-2 flex flex-col text-xs '>
        <span className="font-semibold text-sm big-text">{user.firstName} {user.lastName}</span>
        <span className='font-light'>{trimSentence(user.username)}</span>
        <h1 className='flex-center'>{isSponsred?"Sponsored post":<span className='whitespace-nowrap flex'>
          {user.followers} {<Icons.arrowUp className='text-sm text-main'/>}  <span className='ml-3 tinytext'>2w ago</span></span>}</h1>
    </div>
    </div>
    {!isVideo && <button className='flex-center  hover:text-main bounceup'>Follow <Icons.follow className='ml-1 text-main'/></button>}
  </div>
 
  )
}
