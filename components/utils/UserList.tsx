import React from 'react'
import { cn } from '@/lib/utils'
import UserAvatar from './UserAvatar'
import { IUser } from '@/store/interfaces'
import { useRouter } from 'next/router'
import { Popover, PopoverTrigger,PopoverContent } from '../ui/popover'

import { Button } from '../ui/button'
import Link from 'next/link'
import { Icons } from '@/utils/icons'

interface IshowStatus{
   className?:string,user:IUser,showStatus?:boolean
}

export default function UserList({className,user,showStatus}:IshowStatus) {
   // const {activeUsers} = useAppSelector((state)=>state.layout)
   // console.log
   // const isOnline = activeUsers.some((user=>user.username === user.username))
   // console.log(isOnline)
   const router =useRouter()
   //onClick={()=>{router.push(`/chats/${user.username}`)}}
  return (
   <Popover>
      <PopoverTrigger asChild>
         <div className={cn('px-2 cursor-pointer hover:bg-accent py-1',className)}>
            <div className='py-1 flex-center'>
               <div className="h-fit w-fit shrink-0 rounded-full relative ">
                  <UserAvatar isPrivate={false} theme={user.profileTheme} username={user.username} src={user.profileImage}/>
                  {showStatus &&  <div className="absolute bottom-2 right-0 rounded-full bg-green-500 h-2 w-2"></div>}
               </div>
               <div className='grow  pl-2'>
                  <h1 className='leading-3  hover:text-blue-500 text-sm font-medium'>{user.username}</h1>
                  <h1 className="text-[11px]">{user.firstName} {user.lastName}</h1>
               </div>
            </div>
         </div>
      </PopoverTrigger>
      <PopoverContent className='px-0 py-1'>
         <Link href={`/profile/${user.username}`} className='text-foreground hover:no-underline hover:text-foregound'>
         <Button variant={'ghost'} className='flex text-[13px] mr-1 justify-start items-center w-full rounded-md'>
            <Icons.profile className='text-main text-lg text-left'/>
            <span className='font-medium'>View {user.username} profile</span>
         </Button>
         </Link>
         <Link href={`/chats/${user.username}`} className='text-foreground hover:no-underline hover:text-foregound'>
         <Button variant={'ghost'} className='flex text-[13px] justify-start items-center w-full rounded-md'>
            <Icons.messenger className='text-main text-lg text-left mr-1'/>
            <span className='font-medium'>Message {user.username}</span>
         </Button>
         </Link>
      </PopoverContent>
   </Popover>

  )
}
