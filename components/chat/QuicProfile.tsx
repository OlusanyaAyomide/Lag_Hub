import React from 'react'
import UserAvatar from '../utils/UserAvatar'
import { Button } from '../ui/button'
import Link from 'next/link'
import { IUser } from '@/store/interfaces'


export default function QuicProfile({user}:{user:IUser}) {
  return (
    <div className="bg-backgroud pb-44">
        <div className='bg-heroL mt-8  dark:bg-heroD flex  items-end justify-center h-[120px] relative'>
        <div className='translate-y-32 w-fit'>
        <div className="block h-32 w-32 mx-auto  p-1 bg-background rounded-full">
             <UserAvatar
              isPrivate={false}
              src={user.profileImage}
              theme={user.profileTheme}
              username={user.username}
              showStatus={true}
             className='h-full w-full shadow-sm'/>
        </div>
        <div>
            <h1 className="text-lg  font-semibold">{user.username}</h1>
            <h1 className='font-medium text-center -mt-[2px]'>
              <span>{user.firstName}</span>
              <span className='ml-2'>{user.lastName}</span>
            </h1>
            <div className=" text-[10px] text-center">
                <span className='mr-4'>{user.firstName}</span>
                <span>{user.lastName}</span>
            </div>
            <Link href={`/profile/${user.username}`}>
            <Button className='h-8 flex itemx-center bg-main hover:bg-blue-500 mt-4 w-full text-white'>View Profile</Button>
            </Link>
          
        </div>
        </div>
    </div>
    </div>
 
  )
}
