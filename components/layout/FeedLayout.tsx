import React from 'react'
import Header from '@/components/layout/Header'
import { Card, CardContent } from '@/components/ui/card'
import ProfilePreview from '@/components/utils/ProfilePreview'
import SideLink from '@/components/layout/SideLink'
import Rightsection from '@/components/utils/Rightsection'

export default function FeedLayout({children}:{children:React.ReactNode}){
  return (
        <div>
          <Header/>
          <div className='min-h-[150vh] md:pt-[60px] bg-page flex  md:space-x-3 '>
             <div className='hidden md:block md:w-[270px] shrink-0 lg:w-[320px]'>
                <div className='py-4 pb-20 h-screen w-[270px] lg:w-[320px] left-2 fixed overflow-scroll  default-scroll px-4'>
                   <Card className='border-none bg-background shadow-sm py-3'>
                     <ProfilePreview/>
                   </Card>
                   <Card className='md:mt-6 md:mb-4 bg-background py-3 border-none shadow-sm'>
                     <SideLink/>
                   </Card>
                </div>
             </div>
             <div className='grow'>
               {children}
             </div>
            <Rightsection/>
            </div>
        </div>
  )
}
