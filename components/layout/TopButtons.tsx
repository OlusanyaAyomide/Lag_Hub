import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { IconType } from 'react-icons/lib'
import { useAppSelector } from '@/hooks/reduxHooks'

interface ITopButtons{
    href:string
    isActive:boolean
    Icon:IconType
    name:string
}

export default function TopButtons({href,isActive,Icon,name}:ITopButtons) {
  const {unread} = useAppSelector((state=>state.user.data))
  return (
    <Link href={href}>
        <Button size={"icon"} variant={"ghost"} className={`text-shade ${isActive?"isactive":""} relative`}>
        {name === "chats" && unread > 0 && 
            <div className="absolute top-[2px] right-0 flex-center font-medium items-center h-[14px] w-[14px] bg-red-500 grid place-content-center rounded-full text-white ">
                <span className='text-[11px]'>{unread<9?unread:"9+"}</span>
            </div> 
                      }
           <Icon  className={`text-2xl  ${isActive?"isactive":""}`}/>
        </Button>
    </Link>
  )
}
