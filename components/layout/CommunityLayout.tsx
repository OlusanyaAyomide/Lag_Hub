import React from 'react'
import FeedLayout from './FeedLayout'
import Spinners from './Spinners'

export default function CommunityLayout({children}:{children:React.ReactNode}) {
  return (
    <FeedLayout>
        <div className='fixed h-screen w-full xl:w-fit z-10  items-center md:w-[70%]  flex justify-center opacity-20'>
          <Spinners/>
        </div>
        <div className="relative z-20 overflow-hidden min-h-[80vh]">
        {children}
        </div>

    </FeedLayout>
  )
}
