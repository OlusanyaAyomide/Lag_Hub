import React from 'react'
import { shouldTrim, trimAndAppend } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Icons } from '@/utils/icons'
import Link from 'next/link'
import { useTrimmedText } from '../../hooks/TextHooks'
import SingleReply from './SingleReply'
import UserAvatar from '../utils/UserAvatar'


interface ISingleComment {
    comment: string;
    time: string;
    like: number;
    isDetailed:boolean
    
    
    reply: ({
        comment: string;
        time: string;
    } | undefined)[];
}[]



export default function SingleComment({comment,time,like,reply,isDetailed}:ISingleComment) {

    const {text,isTrimmed,toggleText} = useTrimmedText(comment,30)

  return (
    <div className={`${isDetailed?"mb-5":"mb-3"}`}>
        <div  className='flex flex-wrap'>
            <div className="flex w-full">
            <UserAvatar/>
            <div className='grow pl-1 sm:pl-2'>
              <div className="rounded-md bg-accent/50 py-3 pad">
                <h1 className='mb-1'>
                  <span className="font-semibold">Ayomide Johnson</span>
                  <span className='text-[11px] ml-1 sm:text-xs font-light'>{time}</span>
                </h1>
                <div>
                  {isDetailed?
                  <h1>{text}
                   {shouldTrim(30,comment) && <button className='ml-2 text-main font-medium' onClick={toggleText}>{isTrimmed?"show less":"...show more"}</button>}</h1>
                  :<>
                    <span>{trimAndAppend(20,comment)}</span>
                    {shouldTrim(20,comment) && <Link className='ml-2 font-medium hover:underline hover:text-main' href={"/post/detail/1234"}>see more..</Link>} 
                  </>
                  }
                </div>
              </div>
              <div className="w-full  mt-1 mb-3 flex-center pad">
                <button className='text-main  mr-3 flex-center'><Icons.thunbsup/><span className='ml-[2px]'>{like}</span></button>
                <button className='text-main  mr-3 flex-center'><Icons.comment/><span className='ml-[2px]'>{reply.length}</span></button>
                <span>21 hours ago</span>
              </div>
            </div>
          </div>
        </div>
        {reply.length > 0 && reply.map((item,key)=>(
        <div key={key}>
          {!isDetailed?
            key < 2 && <SingleReply isDetailed={isDetailed}  {...item}/>:
            <SingleReply isDetailed={isDetailed} {...item}/>}
        </div>
        ))}
        {reply.length > 2 && !isDetailed &&
        <Link href={"/post/detail/1234"}><h1 className='block mt-1 pl-12 sm:pl-16'>view all {reply.length} reply</h1></Link>
        }
    </div>
  )
}
