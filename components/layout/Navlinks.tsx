"use client"
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Icons } from '@/utils/icons'
import { Toplinks } from '../../utils/constants'
import { Button } from '../ui/button'
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger,
} from "@/components/ui/tooltip"
import { useAppSelector } from '@/hooks/reduxHooks'


export default function Navlinks() {
    const {asPath} = useRouter()
    const {unread} = useAppSelector((state=>state.user.data))
    console.log(unread,"unread")
    return (
    <>
    {Toplinks.map((item,key)=>{
        const Icon = item.icon
        const isActive = asPath.startsWith(item.link)
        console.log(isActive)
        return(
           <TooltipProvider key={key}>
              <Tooltip>
                 <TooltipTrigger asChild>
                 <Link href={"/"}>
                    <Button  variant={"ghost"} className={`${isActive?"isactive":""} relative`}>
                      {item.name === "chats" && unread > 0 && 
                        <div className="absolute flex-center items-center h-3 w-3 bg-red-500 rounded-full text-white">
                           <span>{unread<9?unread:"9+"}</span>
                        </div> 
                      }
                       <Icon/>
                    </Button>
                 </Link> 
                 </TooltipTrigger>
                 <TooltipContent side='bottom'>
                    <span>{item.name}</span>
                 </TooltipContent>
              </Tooltip>
           </TooltipProvider>
        )
     })}
    </>

  )
}
