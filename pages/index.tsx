import React from 'react'

import FeedLayout from '@/components/layout/FeedLayout'
import MakePost from '@/components/feed/MakePost'
import BasicPost from '@/components/feed/BasicPost'

export default function Home() {
  return (
    <FeedLayout>
      <div className='px-2 lg:px-8 xl:px-4'>
        <MakePost/>
        <BasicPost/>
      </div>

    </FeedLayout>
  )
}
