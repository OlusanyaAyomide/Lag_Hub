import React from 'react'

import FeedLayout from '@/components/layout/FeedLayout'
import MakePost from '@/components/feed/MakePost'

export default function Home() {
  return (
    <FeedLayout>
      <div className='px-2 lg:px-8 xl:px-4'>
        <MakePost/>
      </div>

    </FeedLayout>
  )
}
