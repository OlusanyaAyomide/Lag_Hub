import React from 'react'
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

export default function CommunityChat() {
  const router = useRouter()
  const communitySlug = router.query.Slug as string
  const {community:{communityDetail:{name}}} = useAppSelector((state=>state.community))
  const dispatch = useAppDispatch()

  const {isLoading,data} = useGetRequest({queryKey:[communitySlug],queryFn:()=>{return getCommunityRequest(communitySlug)},onSuccess:({data:{data}}:AxiosResponse<ICommunityInfoResponse>)=>{
    dispatch(communityActions.setCommunityInfo(data))
  }})

  return (
    <CommunityLayout>
      {data &&  <>
        <ChatHeader backLink='/community' isPrivate={false}
        title={name}>
            <CommunityInfo/>
            </ChatHeader>
        <ChatRoom/>
      </> }
      {isLoading && <span>Loading</span>}
    </CommunityLayout>

  )
}
