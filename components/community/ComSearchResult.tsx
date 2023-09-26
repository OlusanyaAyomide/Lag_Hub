import React from 'react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { ICommunity } from '@/store/interfaces'

export default function ComSearchResult(item:ICommunity) {
  return (
    <Link href={`/community/chat/${item.slug}`} className='text-foreground  hover:no-underline'>
    <div className='py-1 px-3 flex-center hover:bg-accent cursor-pointer'>
        <Avatar className='h-10 w-10 bg-light'>
            <AvatarFallback>Lh</AvatarFallback>
            <AvatarImage className='object-contain' src={item.communityImage}/>
        </Avatar>
        <div className='grow  pl-2'>
           <h1 className=''>{item.name}</h1>
        </div>
    </div>
</Link>
  )
}
