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
import UserAvatar from '../utils/UserAvatar'
import { useAppSelector } from '@/hooks/reduxHooks'

export default function MobileNav() {
  const {data:{username,firstName,lastName}} = useAppSelector((state=>state.user))
   const [text,setText] = useState<string>("")
   return (
   <div>
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
    <SideLink/>
   </div>
  )
}
