import React from 'react'
import { IconType } from 'react-icons/lib'
import { cn } from '@/lib/utils'
import DotLoader from './spinners/DotLoader'

interface IPostInfo{
    Icon:IconType
    text:string
    className?:string
    extraText?:string
    ngClass?:string
    onClick?:()=>void
    isloading?:boolean
    disabled?:boolean
  }
export const IconTextButton = ({Icon,isloading,disabled,text,className,extraText,ngClass,onClick}:IPostInfo)=>(
    <button disabled={disabled} onClick={onClick} className={cn(`py-2 w-full pad flex flex-wrap text-left hover:bg-accent rounded-md ${isloading?"flex-nowrap block justify-center":""}`,className)}>
      {isloading  ?<DotLoader color='#1977F2'/>:<>
        <Icon className='text-lg text-main'/>
        <span className={cn('font-medium ml-3',ngClass)}>{text}</span>   
        {extraText && <span className="block text-xs">{extraText}</span>}
      </>}

    </button>
)
  