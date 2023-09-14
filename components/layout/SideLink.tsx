"use client"
import React from 'react'
import { sideLinks } from '../../utils/constants'
import Link from 'next/link'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'

export default function SideLink() {
   const pathname = usePathname()
   return (
      <div className=' flex flex-col py-4 soace-y-1 sm:space-y-3'>
         {sideLinks.map((item,key)=>{
         const isActive = pathname === item.link
         const Icon = item.icon
         return (<Link className='text-foreground hover:no-underline' href={item.link} key={key}>
            <Button className={`flex justify-start  py-6 md:py-4 rounded-none max-md:mb-2 relative items-center w-full ${isActive?"side-active":""}`} variant={"ghost"}>
               <Icon className={`text-2xl ${isActive?"text-main":"text-shade"}`}/>
               <span className={`ml-2 max-md:text-base md:text-sm ${isActive?"text-main font-semibold":""}`}>{item.name}</span>
            </Button>
         </Link>)
         }
      )}
    </div>
  )
}
