import UserDm from '@/components/chat/UserDm'
import ChatHeader from '@/components/community/chat/ChatHeader'
import CommunityLayout from '@/components/layout/CommunityLayout'
import ProfileHero from '@/components/profile/ProfileHero'
import QuicProfile from '@/components/chat/QuicProfile'
import React from 'react'

export default function PrivteChat() {
  return (
    <CommunityLayout>
        <ChatHeader isProfile isPrivate title='Johnsoe Doe' backLink='/chats'>
          <QuicProfile/>
        </ChatHeader>
        <UserDm/>
    </CommunityLayout>
  )
}
