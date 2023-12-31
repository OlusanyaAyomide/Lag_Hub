import UserAvatar from '@/components/utils/UserAvatar';
import React, { useRef,useEffect } from 'react'
import { useTrimmedText } from '@/hooks/TextHooks';
import { isDateToday, shouldTrim } from '@/lib/utils';
import { Icons } from '@/utils/icons';
import Image from 'next/image';
import {  IDmSingleChat } from '@/store/interfaces';
import { useAppSelector } from '@/hooks/reduxHooks';
import Timeago from 'react-timeago'
import { useInView } from 'react-intersection-observer';
import socket from '@/sockets/sockets';
import Linkify from 'linkify-react';

export default function DmSingleChat(message:IDmSingleChat) {
    const {data:{username}} = useAppSelector((state=>state.user))
    const isSender = message.sender.username === username
    const {text,isTrimmed,toggleText} = useTrimmedText(message.text,30)
    const postedDate = new Date(message.createdAt)
    const isToday = isDateToday(message.createdAt)
    const {ref,inView} =  useInView()
    
    useEffect(()=>{
        if(isSender || !inView){return}
        if(message.isRead){return}
        socket.emit("read-chat",message)
    },[isSender,inView,message])
    return (
    <div ref={ref} className={`flex mb-4 ${isSender?"justify-end":""}`}>
        <div className={`w-fit break-words overflow-hidden ml-1 min-w-[100px] xs:max-w-[80%] sm:max-w-[300px] md:max-w-[320px]  xl:max-w-[280px] px-2 py-1 rounded-md relative ${isSender?"bg-main pb-3 text-white":"bg-background "}`}>
            <div className={`flex ${!isSender ?"justify-between mb-2":"mb-1 justify-end"}`}>
                <span className='text-[9px] ml-2'>
                    {isToday || <Timeago date ={postedDate}/> }    
                </span>   
            </div>
            {message.type === "text" ?<div className='max-sm:max-w-[220px] break-words'>
                <Linkify>
                    {text}
                </Linkify>
                {shouldTrim(40,message.text) && <button className='ml-2  font-medium' onClick={toggleText}>{isTrimmed?"less":"..more"}</button>}
            </div>:
            <>
            <div className='w-full rounded-md  overflow-hidden'>
                <div className='relative h-[165px] min-w-[200px]' >
                <Image fill  src={message.imageUrl || ""} alt="chat-image" className='object-cover mx-auto'/>
                </div>
            </div>
            {message &&  <div className='max-sm:max-w-[220px] break-words'> 
                <span className='mt-2 block'>
                    <Linkify>
                        {text}
                    </Linkify>
                </span>
                {shouldTrim(40,message.text) && <button className='ml-2  font-medium' onClick={toggleText}>{isTrimmed?"less":"..more"}</button>}
            </div> 
            }
            </>
            }
            {isSender && <Icons.doubleCheck className={`text-lg absolute ${message.isRead?"text-green-500":"text-white/90"} right-[2px] bottom-0`}/>}
        </div>
    </div>
    )
}
