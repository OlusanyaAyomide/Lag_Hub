import React from 'react'
import { Icons } from '@/utils/icons'
import UserAvatar from '../utils/UserAvatar'
import { IPost } from '@/store/interfaces'
import Link from 'next/link'

export default function IsShared(post:IPost) {
  const src = post.repostedAvatar
  const theme = post.repostedTheme
  return (
    <div className='flex  border-b pb-1  pad'>
        <UserAvatar className='h-7 w-7' isPrivate={false} src={src} theme={theme}/>
        <h1 className='text-[13px] ml-3 pr-4'><span>{post.reposted}</span> <span><Icons.arrowLeft className='text-main inline ml-1'/></span> 
          <Link href={`/post/detail/${post.repostedId}`}>
            <span className='ml-3 text-main hover:underline decoration-main underline-offset-2'>view source</span>
          </Link>

        </h1>
    </div>
  )
}
