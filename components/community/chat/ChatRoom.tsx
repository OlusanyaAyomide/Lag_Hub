import React,{useRef,useEffect} from 'react'
import SingleChat from './SingleChat'
import SendMessage from './SendMessage'
import { IInputType } from './SendMessage'
import { useAppSelector } from '@/hooks/reduxHooks'
import socket from '@/sockets/sockets'



export default function ChatRoom() {

  const {community} = useAppSelector((state=>state.community))

  useEffect(()=>{
    window.scrollTo(0, document.body.scrollHeight);
    },[])

  const handeSendMessage=({type,text,imageUrl}:IInputType)=>{
    socket.emit("send-community-message",{type,text,imageUrl,community:community.communityDetail})
  }

  return (
    <div className='pad pt-14 pb-14'>
      {community.messages.map((item,key)=>{
        const prevUser = key>0?community.messages[key-1].messageUser:undefined
        return <SingleChat isPrivate={false} key={key} message={item} prevUser={prevUser}/>
      })}
      <SendMessage
         isJoined={community.isMember} 
         sendMessage={handeSendMessage}
         isLiam={false}
         joinCommunity={()=>{socket.emit("join-community",community.communityDetail)}}
         />
    </div>
  )
}
