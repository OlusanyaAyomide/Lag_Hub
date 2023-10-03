import { Icons } from '@/utils/icons'
import React, { useEffect, useRef } from 'react'
import SingleLimaChat from './SingleLimaChat'
import TextareaAutosize from 'react-textarea-autosize';
import Link from 'next/link';
import SendMessage from '../community/chat/SendMessage';
import { cn } from '@/lib/utils';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import aiRequest from '@/hooks/requests/airequest';
import { useGetRequest, usePostRequest } from '@/hooks/useRequestProcessor';
import { AxiosResponse } from 'axios';
import { IAIChatResponse, IAiSingleChat } from '@/store/interfaces';
import { liamActions } from '@/store/LiamSlice';
import { getCurrentTimeString } from '@/lib/utils';
import ChatLoader from '../utils/spinners/ChatLoader';
import TypingLoader from './TypingLoader';
import LiamTextArea from './LiamTextArea';

export default function MainChat({className}:{className?:string}) {
  
  const {username} = useAppSelector((state=>state.user.data))
  const {messages} = useAppSelector((state=>state.liam))
  const dispatch = useAppDispatch()
  const divref = useRef<HTMLDivElement>(null)

  const mutationFn = (body:{text:string})=>{
    return aiRequest.post(`/chats/create/${username}`,body)
  }
  
  const queryFn = ()=>{
    return aiRequest.get(`chats/${username}`)
  }

  const {isLoading,mutate} = usePostRequest({mutationFn,onSuccess:({data}:AxiosResponse<IAiSingleChat>)=>{
    dispatch(liamActions.setSingleChat(data))
  },onError:()=>{
    dispatch(liamActions.setSingleChat({
      createdAt:getCurrentTimeString(),
      message:"An error was encoutered,try again",
      type:"ai"
    }))
  }})

  const {isLoading:loading,data} = useGetRequest({queryKey:["ai-chat"],queryFn,
  onSuccess:({data}:AxiosResponse<IAIChatResponse>)=>{
    dispatch(liamActions.setLiamChats(data.messages))
  }})

  const sendChat=({text}:{text:string,type:"image"|"text"})=>{
    if(text === ""){return}
    dispatch(liamActions.setSingleChat({
      createdAt:getCurrentTimeString(),
      message:text,
      type:"human"
    }))
    mutate({text}) 
  }

  useEffect(()=>{
       if (divref.current) {
      if(className){
        window.scrollTo(0, document.body.scrollHeight)       
      }
      divref.current.scrollTop = divref.current.scrollHeight;
    }
  },[messages.length])

  return (
    <div className={cn(`h-full pb-12  relative z-50 `,className)} ref={divref}>
      {className && <div className='bg-background'>
        <div className="shadow-sm border-b relative py-2 bg-background text-transparent bg-clip-text bg-gradient-to-b from-main to-foreground">
          <h1 className="text-2xl sm:text-3xl font-bold text-center">HI {username}</h1>
          <h1 className='text-center font-medium bigtext flex justify-center'><span>I Am Liam</span> <Icons.robot className='text-lg text-main relative top-[2px]'/> <span>, An AI assistant</span></h1>
         </div>
      </div>}
      {!className && 
            <div className='fixed-section py-2'>
            <Link href={"/"}>
              <button className='mr-2 ml-1 text-xl'>
                <Icons.back/>
              </button>  
            </Link>
            <Icons.robot className='text-3xl text-main'/>
              <h1 className="font-semibold grow ml-3 bigtext">Liam</h1>
          </div>
      }
      
      <div className={`${className?"pt-2":"pt-14 md:pt-12"}`}>
      {data && messages.map((item,key)=>(
          <SingleLimaChat key={key} {...item}/>
        ))}
        {isLoading && <TypingLoader/>}
        {loading && <ChatLoader/>}
      </div>

      {className?<div className={`flex items-end fixed  pb-1 w-full bg-background ${className?"max-w-[512px] bottom-0":"bottom-0"} px-2`}>
        <LiamTextArea sendMessage={sendChat} disabled={isLoading}/>
      </div>:<SendMessage 
         disabled={isLoading}
         focusChange={(status:boolean)=>{status=true}}
         isJoined isLiam sendMessage={sendChat}/>}
    </div>

    )
}
