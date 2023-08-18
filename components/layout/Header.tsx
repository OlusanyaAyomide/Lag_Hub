"use client"
import React from 'react'
import LeftHeader from './LeftHeader'
import { usePathname } from 'next/navigation'
import { Toplinks } from '../../utils/constants'
import { Button } from '../ui/button'
import { Icons } from '@/utils/icons'
import Link from 'next/link'
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger,
 } from "@/components/ui/tooltip"
import { useInView } from 'react-intersection-observer'
import RightHeader from './RightHeader'
import {Sheet,SheetContent,SheetTrigger} from "@/components/ui/sheet"
import MobileNav from './MobileNav'
import VideoSearch from '../youtube/VideoSearch'
import TopButtons from './TopButtons'

export default function Header() {
   const pathname = usePathname()
   const isVideo = pathname === "/video" || "/reels"

   const {entry,inView,ref} = useInView()
   

  return (
   <div className={`paddingx ${entry && !inView?"mb-[50px]":""} flex z-40 w-full bg-background md:fixed flex-wrap py-2 shadow-sm border-b`}>
      <LeftHeader refs={ref}  className='w-full md:w-[150px] lg:w-[350px]'/>
      <div className={`flex justify-between bg-background md:justify-center md:space-x-10 lg:space-x-12 items-center grow ${entry && !inView ?"top-overlay":""}` }> 
      <Sheet>
         <SheetTrigger asChild>
            <Button className='md:hidden text-shade' variant={"ghost"} size={"icon"}><Icons.menu/></Button>
         </SheetTrigger>
         <SheetContent side={"right"} className='w-full paddingx overflow-auto'> 
         <MobileNav/> 
         </SheetContent>
      </Sheet>
      {Toplinks.map((item,key)=>{
         const isLast = key === 4
         const isActive = pathname === item.link
         return(
            <TooltipProvider key={key} delayDuration={50}>
               <Tooltip>
                  <TooltipTrigger asChild>
                  {!isLast?
                     <TopButtons isActive={isActive} href={item.link} Icon={item.icon}/>
                  :!isVideo? <TopButtons isActive={isActive} href={item.link} Icon={item.icon}/>:<VideoSearch/>
                  }
                  </TooltipTrigger>
                  <TooltipContent side='bottom' className='bg-background'>
                        {!isLast?<span>{item.name}</span>:isVideo?"search videos":<span>{item.name}</span>}
                  </TooltipContent>
               </Tooltip>
            </TooltipProvider>)
         })}
      </div>
      <RightHeader/>
   </div>
  )
}
