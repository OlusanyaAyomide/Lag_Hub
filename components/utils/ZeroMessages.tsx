import { Icons } from '@/utils/icons'
import React from 'react'

export default function ZeroMessages() {
  return (
    <div className='my-10 mx-auto w-fit '>
        <div className='flex mb-4 animate-slowbounce'>
            <Icons.chat1 className='text-[80px]  opacity-50 text-shade -rotate-[25deg] mr-3'/>
            <Icons.chat2 className='text-[80px]  opacity-50 text-shade rotate-[25deg] ml-3'/>
        </div>
        <h1 className='text-center text-shade mb-2'>No comments yet</h1>
        <h1 className="text-center text-shade text-[11px] sm:text-xs">Be the first to comment</h1>
    </div>
  )
}
