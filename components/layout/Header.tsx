"use client"
import React from 'react'
import LeftHeader from './LeftHeader'
import { usePathname } from 'next/navigation'
import { Toplinks } from '../../utils/constants'
import { Button } from '../ui/button'
import { Icons } from '@/utils/icons'
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip"
import { useInView } from 'react-intersection-observer'
import RightHeader from './RightHeader'
import {Sheet,SheetContent,SheetTrigger} from "@/components/ui/sheet"
import MobileNav from './MobileNav'
import VideoSearch from '../youtube/VideoSearch'
import TopButtons from './TopButtons'
import SearchToggler from './SearchToggler'
import { useRouter } from 'next/router'

export default function Header() {
   const {asPath} = useRouter()
   const pathname = usePathname()
   const isVideo = pathname === "/video" || pathname == "/reels"
   const isChatRoom = /^(\/community\/|\/chats\/|\/video\/).+$/.test(pathname)
   const isReels = pathname === "/reels"

   const {entry,inView,ref} = useInView()
   

  return (
   <div className={`paddingx ${entry && !inView?"mb-[50px]":""} flex relative ${isChatRoom || isReels?"max-md:hidden mb-0":""} z-40 w-full bg-background md:fixed flex-wrap py-2 shadow-sm border-b`}>
      <LeftHeader refs={ref}  className='w-full hidden md:flex md:w-[190px] lg:w-[350px] xl:w-[480px]'/>
      <div className={`flex justify-between bg-background md:justify-center md:space-x-10 lg:space-x-12 items-center grow ${entry && !inView ?"top-overlay":""}` }> 
      <Sheet>
         <SheetTrigger asChild>
            <div>
            <Button className='md:hidden text-shade' variant={"ghost"} size={"icon"}><Icons.menu/></Button>
            </div>
 
         </SheetTrigger>
         <SheetContent side={"right"} className='w-full paddingx overflow-auto'> 
         <MobileNav/> 
         </SheetContent>
      </Sheet>
      {Toplinks.map((item,key)=>{
         const isLast = key === 4
         const isActive = asPath.startsWith(item.link)
         return(
            <TooltipProvider key={key} delayDuration={50}>
               <Tooltip>
                  <TooltipTrigger asChild>
                  {!isLast?
                     <div><TopButtons name={item.name}
                         isActive={isActive} href={item.link} Icon={item.icon}/></div>
                  :!isVideo? <div><TopButtons name={item.name} isActive={isActive} href={item.link} Icon={item.icon}/></div>:
                  <div><VideoSearch/></div>
                  }
                  </TooltipTrigger>
                  <TooltipContent side='bottom' className='bg-background'>
                        {!isLast?<span>{item.name}</span>:isVideo?"search videos":<span>{item.name}</span>}
                  </TooltipContent>
               </Tooltip>
            </TooltipProvider>)
         })}
         <SearchToggler/>
      </div>
      <RightHeader/>
   </div>
  )
}
