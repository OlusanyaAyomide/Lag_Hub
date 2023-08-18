import React from 'react'

import FeedLayout from '@/components/layout/FeedLayout'
import MakePost from '@/components/feed/MakePost'
import BasicPost from '@/components/feed/BasicPost'

export default function Home() {
  return (
    <FeedLayout className='pb-8'>
        <MakePost/>
        <BasicPost type="image" isSharing={true}/>
        <BasicPost type="text" />
        {/* <BasicPost type="video"/> */}
    </FeedLayout>
  )
}
