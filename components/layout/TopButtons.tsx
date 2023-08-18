import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { IconType } from 'react-icons/lib'

interface ITopButtons{
    href:string
    isActive:boolean
    Icon:IconType
}

export default function TopButtons({href,isActive,Icon}:ITopButtons) {
  return (
    <Link href={href}>
        <Button size={"icon"} variant={"ghost"} className={`text-shade ${isActive?"isactive":""}`}>
           <Icon  className={`text-2xl  ${isActive?"isactive":""}`}/>
        </Button>
    </Link>
  )
}
