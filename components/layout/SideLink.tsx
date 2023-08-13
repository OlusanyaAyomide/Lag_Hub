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
         return (<Link href={"/"} key={key}>
            <Button className={`flex justify-start  py-5 rounded-none relative items-center w-full ${isActive?"side-active":""}`} variant={"ghost"}>
               <Icon className={`text-xl  sm:text-2xl ${isActive?"text-main":"text-shade"}`}/>
               <span className={`ml-2 ${isActive?"text-main font-semibold":""}`}>{item.name}</span>
            </Button>
         </Link>)
         }
      )}
    </div>
  )
}
