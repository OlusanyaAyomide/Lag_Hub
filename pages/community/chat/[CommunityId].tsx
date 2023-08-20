import ChatHeader from '@/components/community/chat/ChatHeader'
import ChatRoom from '@/components/community/chat/ChatRoom'
import CommunityLayout from '@/components/layout/CommunityLayout'
import React from 'react'

export default function CommunityRoom() {
  return(
    <CommunityLayout>
       <ChatHeader/>
       <ChatRoom/>
    </CommunityLayout>
    )
}
