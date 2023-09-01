"use client"
import React,{useState} from 'react'
import UserList from '../utils/UserList'
import { Separator } from '../ui/separator'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Icons } from '@/utils/icons'
import ProfilePreview from '../utils/ProfilePreview'
import SideLink from './SideLink'
import { useHydration } from '../../hooks/useHydration'

export default function MobileNav() {
   const [isSearching,setIsSearching] = useState<boolean>(false)
   const {isRendered} = useHydration()
   return (
   <div>
      <div className='flex min-h-10 items-center'>
        {isRendered && <>
        <Input
           onClick={()=>{setIsSearching(true)}} 
           autoFocus={false}
           onBlur={()=>{setIsSearching(false)}}
           className='grow mr-2 focus-visible:ring-0'/>
         <Button className='ml-2' variant={"ghost"} size={"icon"}>
             <Icons.search className='text-2xl'/>
         </Button>
        </>}
 
    </div>
   {isSearching &&  <div className=''>
      <h1 className='font-semibold my-2'>Recent Searches</h1>
      <UserList/>
      <h1 className='font-semibold my-2'>Popular Searches</h1>
      <UserList/>
      <Separator className='my-4'/>      
    </div> }
   {!isSearching && <ProfilePreview className='mt-4 px-0'/>}
   <SideLink/>
   </div>
  )
}
