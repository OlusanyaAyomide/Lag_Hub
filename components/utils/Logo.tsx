import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
export default function Logo({className}:{className?:string}) {
  return (
   <Image  src={"/logo.png"} alt='logo' height={60} width={30} className={cn("h-[35px] w-[40px]",className)}/>
  )
}
