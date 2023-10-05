import React,{useMemo,useState,useEffect} from 'react'
import ChatHeader from '@/components/community/chat/ChatHeader'
import ChatRoom from '@/components/community/chat/ChatRoom'
import CommunityInfo from '@/components/community/chat/CommunityInfo'
import CommunityLayout from '@/components/layout/CommunityLayout'
import { useRouter } from 'next/router'
import { useGetRequest } from '@/hooks/useRequestProcessor'
import { getCommunityRequest } from '@/hooks/requests/endPoints'
import { AxiosResponse } from 'axios'
import { ICommunityInfoResponse } from '@/utils/responeInterface'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { communityActions } from '@/store/communitySlice'
import ChatLoader from '@/components/utils/spinners/ChatLoader'
import NotFound from '@/components/utils/NotFound'

export default function CommunityChat() {
  const router = useRouter()
  const communitySlug = router.query.Slug as string
  const {community:{communityDetail,isMember,userCount},typingUsers} = useAppSelector((state=>state.community))
  const {name,communityImage} =communityDetail
  const {data:{username}} = useAppSelector((state=>state.user))
  const dispatch = useAppDispatch()
  const [notfound,setNotfound] = useState(false)
  const subheaderText = !isMember?`${userCount} participants`:userCount>1?`You and ${userCount-1} other${userCount>2?"s":""}`:"only partcipant"

  const isTyping = useMemo(()=>{
    if(typingUsers.length < 1){return undefined}
    const user = typingUsers[0]
    if(username === user){return undefined}
    return(user)
  },[typingUsers,username])

  const {isLoading,data} = useGetRequest({queryKey:[communitySlug],
    setNotFound:()=>{setNotfound(true)},
    queryFn:()=>{return getCommunityRequest(communitySlug)},
    onSuccess:({data:{data}}:AxiosResponse<ICommunityInfoResponse>)=>{
    dispatch(communityActions.setCommunityInfo(data))
  }})

  useEffect(()=>{
    return ()=>{
      dispatch(communityActions.emptyCommunity())
    }
  },[])

  return (
    <CommunityLayout>
      {data &&  <>
        <ChatHeader 
          isTyping={isTyping}
          backLink='/community' 
          isPrivate={false}
          title={name}
          src={communityImage}
          subHeading={subheaderText}
          >
            <CommunityInfo/>
            </ChatHeader>
        <ChatRoom/>
      </> }
      {isLoading && <ChatLoader/>}
      {notfound && <NotFound/>}
    </CommunityLayout>

  )
}
