import React from 'react'
import { Tempsearch } from '../layout/AutoComplete'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Icons } from '@/utils/icons'
import { cn } from '@/lib/utils'
export default function UserList({className}:{className?:string}) {
  return (
   <div className={cn('flex flex-col space-y-2',className)}>
      {Tempsearch.map((item,key)=>(
         <div key={key} className='flex items-center py-1'>
            <Avatar>
               <AvatarImage src='/profile.png'></AvatarImage>
               <AvatarFallback>Lh</AvatarFallback>
            </Avatar>
            {item.verify && <Icons.verify className='text-sm ml-[2px] text-blue-500'/>}
            <div className='grow flex items-center pl-3'>
               <span className=''>{item.text} and me to bla bla</span>
            </div>
         </div>
      ))}
   </div>
  )
}
