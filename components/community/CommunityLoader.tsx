import React from 'react'
import MessageSkeleton from '../utils/MessageSkeleton'

export default function CommunityLoader() {
  return (
    <div className='px-2 sm:px-3'>
        <MessageSkeleton isCommunity/>
        <MessageSkeleton isCommunity/>
        <MessageSkeleton isCommunity/>
    </div>
  )
}
