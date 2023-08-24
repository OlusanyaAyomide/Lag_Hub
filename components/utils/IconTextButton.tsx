import React from 'react'
import { IconType } from 'react-icons/lib'
import { cn } from '@/lib/utils'

interface IPostInfo{
    Icon:IconType
    text:string
    className?:string
    extraText?:string
    ngClass?:string
    onClick?:()=>void
  }
export const IconTextButton = ({Icon,text,className,extraText,ngClass,onClick}:IPostInfo)=>(
    <button onClick={onClick} className={cn(" py-2 w-full pad flex flex-wrap text-left hover:bg-accent rounded-md",className)}>
      <Icon className='text-lg text-main'/>
      <span className={cn('font-medium ml-3',ngClass)}>{text}</span>   
      {extraText && <span className="block text-xs">{extraText}</span>}
    </button>
)
  