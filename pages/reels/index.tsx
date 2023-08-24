import ReelsContent from '@/components/Reels/ReelsContent'
import ReelsFIlter from '@/components/Reels/ReelsFIlter'
import FeedLayout from '@/components/layout/FeedLayout'
import React from 'react'

export default function Reels() {
  return (
    <FeedLayout>
      {/* <div>dgdg</div> */}
      <ReelsFIlter/>
      <ReelsContent/>
    </FeedLayout>
    )
}
