import React from 'react'
import { IconType } from 'react-icons/lib'
import { cn } from '@/lib/utils'

interface IPostInfo{
    Icon:IconType
    text:string
    className?:string
    extraText?:string
    ngClass?:string
  }
export const IconTextButton = ({Icon,text,className,extraText,ngClass}:IPostInfo)=>(
    <button className={cn(" py-4 w-full pad flex flex-wrap text-left hover:bg-accent rounded-md",className)}>
      <Icon className='text-lg text-main'/>
      <span className={cn('font-medium ml-3',ngClass)}>{text}</span>   
      {extraText && <span className="block text-[11px] sm:text-xs">{extraText}</span>}
    </button>
)
  