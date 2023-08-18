import FeedLayout from '@/components/layout/FeedLayout'
import Categories from '@/components/youtube/Categories'
import VideoList from '@/components/youtube/VideoList'
import React from 'react'
import { mockYoubeData } from '@/utils/TempConstants'

export default function Videos() {
  return (
    <FeedLayout>
        <Categories/>
        <VideoList {...mockYoubeData}/>
    </FeedLayout>
  )
}
