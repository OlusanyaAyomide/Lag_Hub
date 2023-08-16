import PostInformation from '@/components/detail/PostDetail'
import FeedLayout from '@/components/layout/FeedLayout'
import React from 'react'

export default function Detail() {
  return (
    <FeedLayout>
      <PostInformation type='image'/>
    </FeedLayout>
  )
}
