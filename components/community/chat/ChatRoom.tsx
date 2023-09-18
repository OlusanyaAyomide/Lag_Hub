import React,{useRef,useEffect, useMemo} from 'react'
import SingleChat from './SingleChat'
import SendMessage from './SendMessage'
import { IInputType } from './SendMessage'
import { useAppSelector } from '@/hooks/reduxHooks'
import socket from '@/sockets/sockets'
import ChatLoader from '@/components/utils/spinners/ChatLoader'
import ZeroMessages from '@/components/utils/ZeroMessages'



export default function ChatRoom() {

  const communityData = useAppSelector((state=>state.community))
  const {community} = communityData
  const {data:{username}} = useAppSelector((state=>state.user))

  useEffect(()=>{
    window.scrollTo(0, document.body.scrollHeight);
    },[])


  const handeSendMessage=({type,text,imageUrl}:IInputType)=>{
    socket.emit("send-community-message",{type,text,imageUrl,community:community.communityDetail})
  }
  const focusChange = (status:boolean)=>{
    const data ={username,community:community.communityDetail}
    status?socket.emit("typing",data):socket.emit("stop-typing",data)
  }

  return (
    <div className='pad pt-14 pb-14'>
      {community.messages.length === 0 && <div className='h-[80vh]  grid place-content-center'>
        <ZeroMessages/>
      </div>}
      {community.messages.map((item,key)=>{
        const prevUser = key>0?community.messages[key-1].messageUser:undefined
        const justJoined = key<1?true:community.messages[key-1].type ==="system"?true:false
        return <SingleChat 
          isPrivate={false} 
          key={key} message={item}
           prevUser={prevUser}
           justJoined={justJoined}
           />
      })}
      <SendMessage
        focusChange={focusChange}
         isJoined={community.isMember} 
         sendMessage={handeSendMessage}
         isLiam={false}
         joinCommunity={()=>{socket.emit("join-community",community.communityDetail)}}
         />
    </div>
  )
}
