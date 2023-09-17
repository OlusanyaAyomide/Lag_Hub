import React from 'react'
import { Icons } from '@/utils/icons'
import UserAvatar from '../utils/UserAvatar'
import { IPost } from '@/store/interfaces'
import Link from 'next/link'
import { useTrimmedText } from '@/hooks/TextHooks'
import Linkify from 'linkify-react'
import { shouldTrim } from '@/lib/utils'

export default function IsShared(post:IPost) {
  const src = post.repostedAvatar
  const theme = post.repostedTheme
  const username = post.repostedusername
  const repostedText = typeof(post.reposted)==="string"?post.reposted:""
  const {toggleText,text,isTrimmed} = useTrimmedText(repostedText,15)
  return (
    <div className='flex  border-b pb-1  pad'>
        <UserAvatar className='h-7 w-7' username={username} isPrivate={false} src={src} theme={theme}/>
        <h1 className='text-[13px] ml-3 pr-4'>
          <Linkify>
            {shouldTrim(15,repostedText) && <span onClick={toggleText} className='text-main py-4 cursor-pointer ml-2'>{isTrimmed?"show less":"...show more"}</span>} 
          </Linkify>
          <span>{text}</span>
        
        <span><Icons.arrowLeft className='text-main inline ml-1'/></span> 
          <Link href={`/post/detail/${post.repostedId}`}>
            <span className='ml-3 text-main hover:underline decoration-main underline-offset-2'>view source</span>
          </Link>

        </h1>
    </div>
  )
}
