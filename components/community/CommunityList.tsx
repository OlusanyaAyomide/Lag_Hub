import React,{useState} from 'react'
import { cn } from '@/lib/utils'
import { ICommunity, IUser } from '@/store/interfaces'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

interface ICommunityList{
   className?:string,communities:ICommunity[]
   showAll:boolean
}

export default function CommunityList({className,communities,showAll}:ICommunityList) {
    const maxLength = 4
    const [totoalLength,setTotalLength] = useState(maxLength)
    return (
        <div className={cn('mb-0 py-2  cursor-pointer',className)}>
        {communities.map((item,key)=>{
            if(key > totoalLength){return null}
            return(
            <Link href={`/community/chat/${item.slug}`} key={key} className='text-foreground  hover:no-underline'>
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
    })}
    {showAll && (communities.length-1) > maxLength && <button onClick={()=>{setTotalLength((prev=>prev===maxLength?communities.length:maxLength))}}
     className='text-main mx-auto  block mt-3 mb-1'>show {totoalLength ===maxLength?"all":"less"}</button>}
    </div>
  )
}