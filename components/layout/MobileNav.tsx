"use client"
import React,{useState} from 'react'
import SideLink from './SideLink'
import UserAvatar from '../utils/UserAvatar'
import { useAppSelector } from '@/hooks/reduxHooks'
import Logo from '../utils/Logo'
import {Accordion,AccordionContent,AccordionItem,AccordionTrigger,
} from "@/components/ui/accordion"
import Notification from './Notification'

export default function MobileNav() {
  const {data:{username,firstName,lastName}} = useAppSelector((state=>state.user))
   const [text,setText] = useState<string>("")
   return (
   <div>
    <Logo/>
    <div className="mt-3 flex-center">
      <UserAvatar/>
      <div className='ml-2'>
       <h1 className='font-medium '>{username}</h1>
       <h1 className="tinytext font-mediun">
        <span>{firstName}</span>
        <span className='ml-1'>{lastName}</span>
       </h1>
      </div>
    </div>
    <Accordion type="single" collapsible>
        <AccordionItem value="user-notification">
          <AccordionTrigger className="border-b-shade mt-1 hover:font-semibold  hover:no-underline rounded-md">Notifications</AccordionTrigger>
          <AccordionContent className="px-2">
            <Notification show={false}/>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    <SideLink/>
   </div>
  )
}
