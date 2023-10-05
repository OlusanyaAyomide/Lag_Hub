import {useState,useEffect} from "react"
import UserDm from '@/components/chat/chatDm/UserDm'
import ChatHeader from '@/components/community/chat/ChatHeader'
import CommunityLayout from '@/components/layout/CommunityLayout'
import QuicProfile from '@/components/chat/QuicProfile'
import React from 'react'
import { useGetRequest } from '@/hooks/useRequestProcessor'
import { useRouter } from 'next/router'
import { getPrivateChats } from "@/hooks/requests/endPoints"
import { AxiosResponse } from "axios"
import { IPrivateChatResponse } from "@/utils/responeInterface"
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks"
import { privateChatActions } from "@/store/privateChatSlice"
import ChatLoader from '@/components/utils/spinners/ChatLoader'
import NotFound from '@/components/utils/NotFound'


export default function DmChatMain() {
    const router = useRouter()
    const username =  router.query.username as string
    const dispatch = useAppDispatch()
    const [notfound,setNotfound] = useState(false)
    const {chatUser,isTyping} = useAppSelector((state=>state.privateChat))
    const {activeUsers} = useAppSelector((state=>state.layout))
    const {isLoading,data} = useGetRequest({queryKey:[username],
        setNotFound:()=>{setNotfound(true)},
        queryFn:()=>{return getPrivateChats(username)},
        onSuccess:({data:{data}}:AxiosResponse<IPrivateChatResponse>)=>{
            dispatch(privateChatActions.setChatInfo(data))
        }})
  const isOnline = activeUsers.some((user=>user.username === chatUser.username))

  useEffect(()=>{
    return ()=>{
      dispatch(privateChatActions.emptyUser())
    }
  },[])

  return (
    <CommunityLayout>
        {data && <>
            <ChatHeader
                isProfile 
                isPrivate
                title={chatUser.username}
                isTyping={isTyping?chatUser.username:undefined}
                backLink='/chats'
                src={chatUser.profileImage}
                isOnline={isOnline}
                lastOnline={chatUser.lastSeen}
                profileTheme={chatUser.profileTheme}
                >
          <QuicProfile user={chatUser}/>
        </ChatHeader>
        <UserDm/>
        </>}
      {isLoading && <ChatLoader/>}
      {notfound && <NotFound/>}
    </CommunityLayout>
  )
}
