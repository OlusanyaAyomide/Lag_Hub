import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
export default function Logo({className}:{className?:string}) {
  return (
    <div className='w-[140px] h-[40px] relative top-1 shrink-0'>
         <Image  src={"/applogo.png"} alt='logo' fill className={cn("",className)}/>
    </div>
  
  )
}
