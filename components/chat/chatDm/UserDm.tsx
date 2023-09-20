import React,{useEffect} from 'react'
import ZeroMessages from '@/components/utils/ZeroMessages'
import SendMessage, { IInputType } from '../../community/chat/SendMessage'
import { useAppSelector } from '@/hooks/reduxHooks'
import DmSingleChat from './DmSingleChat'
import socket from '@/sockets/sockets'

export default function UserDm() {
  const {messages} = useAppSelector((state=>state.privateChat))
  const {chatUser} = useAppSelector((state=>state.privateChat))

  const sendMessage=({text,imageUrl,type}:IInputType)=>{
    socket.emit("send-dm",{receiver:chatUser,type,text,imageUrl})
  }
  

  const focusChange = (status:boolean)=>{
      socket.emit("dm-typing",{username:chatUser.username,isTyping:status})
  }


  useEffect(()=>{
    window.scrollTo(0, document.body.scrollHeight);
  },[])

  return (
    <div className='pad pt-14 pb-14'>
        {messages.map((item,key)=>(
          <DmSingleChat key={key} {...item}/>
        ))}
        {messages.length === 0 && <div className='h-[80vh]  grid place-content-center'>
        <ZeroMessages text='No previous chats' subText='Start a conversation'/>
      </div>}
    <SendMessage
      isJoined={true}
      focusChange={focusChange}
      sendMessage={sendMessage}
      isLiam={false}
    />
  </div>
  )
}


