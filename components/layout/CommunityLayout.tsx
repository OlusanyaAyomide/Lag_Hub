import React from 'react'
import FeedLayout from './FeedLayout'

export default function CommunityLayout({children}:{children:React.ReactNode}) {
  return (
    <FeedLayout>
        <div className='h-absoulte h-screen overflow-hidden  w-full grid items-center opacity-60'>
            <div className='h-[80px] w-[80px] border-[0.5px] border-main border-opacity-25 grid items-center'>
                <div className='h-60 w-60 rounded-full border-[1px] border-main border-opacity-50 grid items-center'>
                    <div className='h-40 w-40 rounded-full border-main border-[2px] grid items-center'>

                    </div>
                </div>
            </div>
        </div>
        {children}
    </FeedLayout>
  )
}
