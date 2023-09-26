import React from 'react'
import { Icons } from '@/utils/icons'
import { Button } from '../ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import UserAvatar from './UserAvatar'
import { useAppSelector } from '@/hooks/reduxHooks'

export default function ProfilePreview({className,style}:{className?:string,style?:string}) {
  const {data:{username,firstName,lastName,followers,following}} = useAppSelector((state=>state.user))
  return (
   <div className={cn('px-4',className)}>
       <div className='flex items-center'>
         <div className="flex items-center">
            <UserAvatar/>
            <Icons.verify className='ml-[2px] text-main'/>
         </div>
         <div className='pl-3'>
            <h1 className='font-semibold text-base'>{firstName}</h1>
            <h1 className='text-xs'>{username}</h1>
         </div>
       </div>
       <div className="flex px-2 md:-mx-2 lg:mx-0 mt-2 justify-between">
         <span className='text-xs'>{following} following</span>
         <span className='text-xs'>{followers} followers</span>
       </div>
       <Link href={`/profile/${username}`}>
       <Button className={cn('bg-main hover:bg-blue-600 text-white md:hidden block w-full mt-4',style)}>View Profile</Button>
       </Link>
 
   </div>
  )
}
