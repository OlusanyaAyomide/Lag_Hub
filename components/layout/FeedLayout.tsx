import React, { useRef } from 'react'
import Header from '@/components/layout/Header'
import { Card, CardContent } from '@/components/ui/card'
import ProfilePreview from '@/components/utils/ProfilePreview'
import SideLink from '@/components/layout/SideLink'
import Rightsection from '@/components/utils/Rightsection'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useAppSelector } from '@/hooks/reduxHooks'


export default function FeedLayout({children,className}:{children:React.ReactNode,className?:string}){
  const pathname = usePathname()
  const isChatRoom = /^(\/community\/|\/chats\/).+$/.test(pathname)
  const datas = useAppSelector((state=>state.user.data))

  // console.log(datas)
  return (
        <div className={cn("",className)}>
          <Header/>
          <div className={`min-h-[80vh] md:pt-[60px] pb-6 bg-page flex  md:space-x-3`}>
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
              <div className='px-2 lg:px-8 xl:px-4 min-h-[90vh] relative overflow-hidden'>
               {children}
              </div>
             </div>
            <Rightsection/>
            </div>
        </div>
  )
}
