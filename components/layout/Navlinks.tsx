"use client"
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Icons } from '@/utils/icons'
import { Toplinks } from '../../utils/constants'
import { Button } from '../ui/button'
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger,
} from "@/components/ui/tooltip"


export default function Navlinks() {
    const {asPath} = useRouter()
  return (
    <>
    {Toplinks.map((item,key)=>{
        const Icon = item.icon
        const isActive = asPath === item.link
        return(
           <TooltipProvider>
              <Tooltip>
                 <TooltipTrigger asChild>
                 <Link href={"/"}>
                    <Button  variant={"ghost"} className={isActive?"isactive":""}>
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
