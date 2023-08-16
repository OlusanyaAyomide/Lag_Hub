import React from 'react'
import { usePathname,useRouter } from 'next/navigation'
import { Card } from '../ui/card'
import Ads from './Ads'
import { Separator } from '../ui/separator'
import { NotificationDemo } from '../../utils/constants'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export default function Rightsection() {
   const pathname = usePathname()
   // if (pathname === "/"){
      return (
      <div className='hidden py-3 px-4 xl:block lg:w-[320px] shrink-0'>
         <div className='fixed default-scroll overflow-scroll h-screen w-[320px] right-4 pb-32'>
            <Card className='pb-6 bg-background border-none'>
               <h1 className="font-semibold text-base text-shade py-4 px-2 ">Sponsored</h1>
               <Ads/>
               <Ads/>
               <Separator className='my-10 mx-auto w-[250px]'/>
               <div className='px-4'>
                  <h1 className='font-semibold mb-4 px-2'>Notification</h1>
                  {NotificationDemo.map((item,key)=>(
                     <div className="flex items-center px-2 my-4" key={key}>
                        <Avatar>
                           <AvatarImage src='/profile.png'/>
                           <AvatarFallback>Lh</AvatarFallback>
                        </Avatar>
                        <div className='grow pl-2'>
                           <h1 className='text-sm'>
                              <span className='font-semibold mr-2'>{item.name}</span>
                              <span>{item.action}</span>
                           </h1>
                        </div>
                     </div>
                  ))}
               </div>
               
            </Card>
         </div>
         
       </div>
      )
   // }
   // return null
  
}
