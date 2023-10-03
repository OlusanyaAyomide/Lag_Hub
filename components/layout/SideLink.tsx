"use client"
import React,{useRef} from 'react'
import { sideLinks } from '../../utils/constants'
import Link from 'next/link'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'
import { AlertDialog,AlertDialogCancel,AlertDialogContent, AlertDialogTrigger } from '../ui/alert-dialog'
import { Icons } from '@/utils/icons'

import LogOutAlert from './LogOutAlert'
import { useRouter } from 'next/router'
import SwitchTheme from '../utils/SwitchTheme'


export default function SideLink() {
   const {asPath} = useRouter()
   const ref = useRef<HTMLButtonElement>(null)
   return (
      <div className=' flex flex-col py-4 soace-y-1 sm:space-y-3'>
         {sideLinks.map((item,key)=>{
         const isActive = asPath.startsWith(item.link)
         const Icon = item.icon
         return (<Link className='text-foreground hover:no-underline' href={item.link} key={key}>
            <Button className={`flex justify-start  py-6 md:py-4 rounded-none max-md:mb-2 relative items-center w-full ${isActive?"side-active":""}`} variant={"ghost"}>
               <Icon className={`text-2xl ${isActive?"text-main":"text-shade"}`}/>
               <span className={`ml-2 max-md:text-base md:text-sm ${isActive?"text-main font-semibold":""}`}>{item.name}</span>
            </Button>
         </Link>)
         }
      )}
      <SwitchTheme/>
      <AlertDialog>
         <AlertDialogTrigger asChild>
           <div>
             <Button className={`flex justify-start  py-6 md:py-4 rounded-none max-md:mb-2 relative items-center w-full`} variant={"ghost"}>
               <Icons.logout className={`text-2xl text-shade`}/>
               <span className={`ml-2 max-md:text-base md:text-sm`}>Logout</span>
             </Button>
           </div>
         </AlertDialogTrigger>
         <AlertDialogContent>
           <AlertDialogCancel className='hidden' ref={ref}></AlertDialogCancel>
           <LogOutAlert closeref={ref}/>
         </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
