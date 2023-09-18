import { cn } from '@/lib/utils'
import React from 'react'

interface IFieldButton{
    text:string
    error?:string
    placeholder:string
    type?:"text"|"email"|"password"
    children?:React.ReactNode
    className?:string
    value:string
}

export default function FieldButton({children,text,error,placeholder,type="text",className,value}:IFieldButton) {
  return (
    <div className={cn('relative mb-5')}>
        <span className="block text-main font-medium mb-2">{text}</span>
        <input value={value} onChange={()=>{}} type={type} name="" className='h-10 rounded-lg text-foreground dark:bg-[#303131] bg-[#F1F5F9] focus-visible:shadow-[0_0_12px_#0000001f] dark:focus-visible:shadow-[#ffffff2f] px-2 outline-none w-full block' placeholder={placeholder}  />
        {children}
    </div>
  )
}
