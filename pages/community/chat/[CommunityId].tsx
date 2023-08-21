import ChatHeader from '@/components/community/chat/ChatHeader'
import ChatRoom from '@/components/community/chat/ChatRoom'
import CommunityInfo from '@/components/community/chat/CommunityInfo'
import CommunityLayout from '@/components/layout/CommunityLayout'
import React from 'react'

export default function CommunityRoom() {
  return(
    <CommunityLayout>
       <ChatHeader backLink='/community' isPrivate={false}
        title='React Developers  and big Heads'>
          <CommunityInfo/>
       </ChatHeader>
       <ChatRoom/>
    </CommunityLayout>
    )
}
