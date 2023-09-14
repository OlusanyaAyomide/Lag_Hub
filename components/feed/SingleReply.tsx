import React from 'react'
import { shouldTrim, trimAndAppend } from '@/lib/utils'
import Link from 'next/link'
import { useTrimmedText } from '../../hooks/TextHooks';
import { IPostReply } from '@/store/interfaces';
import UserAvatar from '../utils/UserAvatar';
import TimeAgo from 'react-timeago'

interface ISingleReplyitems{
    reply:IPostReply
    isDetailed:boolean,
} 

export default function SingleReply({reply,isDetailed}:ISingleReplyitems) {
    const {text,isTrimmed,toggleText} = useTrimmedText(reply.text,30)
    return (
    <div  className='w-full pl-4 my-1 flex  sm:pl-8'>
        <UserAvatar className='h-6 w-6' isPrivate={false} src={reply.user.profileImage}  theme={reply.user.profileTheme}/>
        <div className='ml-1 sm:ml-2 bg-accent/50 rounded-md pad py-1'>
            <h1 className='mb-1'>
              <span className="font-semibold">{reply.user.username}</span>
              <span className='text-[11px] ml-1 sm:text-xs font-light'>
                <TimeAgo date ={reply.createdAt}/>
              </span>
            </h1>
          <div>
            <>
            {isDetailed?
                  <h1>{text}
                   {shouldTrim(30,reply.text) && <button className='ml-2 text-main font-medium' onClick={toggleText}>{isTrimmed?"show less":"...show more"}</button>}</h1>
                  :<>
                    <span>{trimAndAppend(20,reply.text)}</span>
                    {shouldTrim(20,reply.text) && <Link className='ml-2 font-medium text-main hover:text-underline' href={"/post/detail/1234"}>see more..</Link>} 
                  </>
                  }
            </>
            </div>
        </div>
    </div>
  )
}
