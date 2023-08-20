import React from 'react'
import FeedLayout from './FeedLayout'

export default function CommunityLayout({children}:{children:React.ReactNode}) {
  return (
    <FeedLayout>
        <div className='fixed h-screen w-full xl:w-fit z-10  items-center md:w-[70%]  flex justify-center opacity-20'>
            <div className='h-[480px] bottom-10 max-sm:left-16 w-[480px] relative'>
                <div className="absolute animate-all animate-rightspinner h-[160px] w-[160px] left-[160px] top-[160px] rounded-full border-main border-[2px] border-dashed "></div>
                <div className="absolute animate-all animate-leftspinner h-[300px] w-[300px] left-[90px] top-[90px] rounded-full border-main border border-opacity-50 border-dashed "></div>
                <div className="absolute animate-rightspinner h-[440px] w-[440px] left-[20px] top-[20px] rounded-full border-main border-[0.5px] border-opacity-20 border-dashed "></div>
            </div>
        </div>
        <div className="relative z-20 overflow-hidden min-h-[80vh]">
        {children}
        </div>

    </FeedLayout>
  )
}
