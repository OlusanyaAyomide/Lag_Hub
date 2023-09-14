
import React from 'react'
import { Avatar, AvatarFallback,AvatarImage } from '../ui/avatar'
import { Icons } from '@/utils/icons'
import UserAvatar from '../utils/UserAvatar'
import { trimSentence } from '@/lib/utils'
import { IPost, IUser } from '@/store/interfaces'
import Timeago from 'react-timeago'

interface IProfileInfo{
  post:IPost
  createdAt:string
}

export default function ProfileInfo({post,createdAt}:IProfileInfo){
    const isVideo = false
    const user = post.postUser
    const src = user.profileImage
    const theme = user.profileTheme
    const postDate = post.reposted?post.postedAt||createdAt:createdAt
    const postedDate = new Date(postDate)
  return (
    <div className="flex-center justify-between pt-3">
    <div className='flex-center max-sm:w-[220px]'>
    <UserAvatar className='h-11 w-11' isPrivate={false} src={src} theme={theme}/>
    <div className='ml-2 flex flex-col text-xs '>
        <span className="font-semibold text-sm big-text">{user.username}</span>
        <span className='font-light'>{user.firstName} {user.lastName}</span>
        <h1 className='flex-center whitespace-nowrap'>
        {user.followers} {<Icons.clock className='text-sm text-main'/>}  
        <span className='ml-3 tinytext font-medium'>
             <Timeago date ={postedDate}/> 
        </span>
        </h1>
    </div>
    </div>
    {!isVideo && <button className='flex-center  hover:text-main bounceup'>Follow <Icons.follow className='ml-1 text-main'/></button>}
  </div>
 
  )
}
