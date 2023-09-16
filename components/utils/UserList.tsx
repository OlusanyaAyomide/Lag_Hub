import React from 'react'
import { cn } from '@/lib/utils'
import UserAvatar from './UserAvatar'
import { IUser } from '@/store/interfaces'
import Link from 'next/link'

interface IshowStatus{
   className?:string,user:IUser,showStatus?:boolean
}

export default function UserList({className,user,showStatus}:IshowStatus) {
  return (
   <div className={cn('mb-1',className)}>
      <div className='py-1 flex-center'>
         <div className="h-fit w-fit shrink-0 rounded-full relative ">
            <UserAvatar isPrivate={false} theme={user.profileTheme} username={user.username} src={user.profileImage}/>
            {showStatus && <div className="absolute bottom-2 right-0 rounded-full bg-green-500 h-2 w-2"></div>}
         </div>
         <div className='grow  pl-1'>
            <Link href={`/profile/${user.username}`}><h1 className='leading-3 hover:underline hover:text-blue-500 text-sm font-medium'>{user.username}</h1></Link>
            <h1 className="text-[11px]">{user.firstName} {user.lastName}</h1>
         </div>
      </div>
   </div>
  )
}
