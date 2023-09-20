import React from 'react'
import { shouldTrim, trimAndAppend } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Icons } from '@/utils/icons'
import Link from 'next/link'
import { useTrimmedText } from '../../hooks/TextHooks'
import SingleReply from './SingleReply'
import UserAvatar from '../utils/UserAvatar'
import { Imessageinfo } from '@/utils/interfaces'
import { IPostMessage } from '@/store/interfaces'
import Timeago from 'react-timeago'


interface ISingleComment {
    replyRef:React.RefObject<HTMLTextAreaElement>
    setMessageInfo:React.Dispatch<React.SetStateAction<Imessageinfo | null>>
    isDetailed:boolean   
    message:IPostMessage
    setIsCommenting?:React.Dispatch<React.SetStateAction<boolean>>
    postId?:string
}[]


export default function SingleComment({message,isDetailed,replyRef,setMessageInfo,setIsCommenting,postId}:ISingleComment) {

    const {text,isTrimmed,toggleText} = useTrimmedText(message.text,30)

  return (
    <div className={`${message.replies.length===0?"mb-2":"mb-4"}`}>
        <div  className='flex flex-wrap'>
            <div className="flex w-full">
            <UserAvatar username={message.messageUser.username} isPrivate={false} src={message.messageUser.profileImage} theme={message.messageUser.profileTheme}/>
            <div className='grow pl-1 sm:pl-2'>
              <div className="rounded-md bg-accent/50 py-3 pad">
                <h1 className='mb-1'>
                  <span className="font-semibold">{message.messageUser.username}</span>
                  <span className='text-[11px] ml-1 sm:text-xs font-light'>
                    <Timeago date={message.createdAt}/>
                  </span>
                </h1>
                <div>
                  {isDetailed?
                  <h1>{text}
                   {shouldTrim(30,message.text) && <button className='ml-2 text-main font-medium' onClick={toggleText}>{isTrimmed?"less":"..more"}</button>}</h1>
                  :<>
                    <span>{trimAndAppend(20,message.text)}</span>
                    {shouldTrim(20,message.text) && <Link className='ml-2 font-medium hover:underline hover:text-main' href={`post/detail/${postId}`}>see more..</Link>} 
                  </>
                  }
                </div>
              </div>
              <div className="w-full  mt-1 flex-center pad">
                <button onClick={()=>{
                  setMessageInfo({username:message.messageUser.username,_id:message._id})
                  if(setIsCommenting)(setIsCommenting(true))
                  replyRef.current?.focus()
                }}
                className='text-main  mr-3 flex-center font-medium'><span className='ml-[2px]'>Reply {message.messageUser.username}</span></button>
                <button className='text-main  ml-3 flex-center'><Icons.comment/><span className='ml-[2px]'>{message.replies.length}</span></button>
              </div>
            </div>
          </div>
        </div>
        {message.replies.length > 0 && message.replies.map((item,key)=>(
        <div key={key}>
          {!isDetailed?
            key < 2 && <SingleReply reply={item} isDetailed={isDetailed}/>:
            <SingleReply isDetailed={isDetailed} reply={item}/>}
        </div>
        ))}
        {message.replies.length > 2 && !isDetailed &&
        <Link href={`/post/detail/${postId}`}><h1 className='block mt-1 pl-12 sm:pl-16'>view all {message.replies.length} reply</h1></Link>
        }
    </div>
  )
}
