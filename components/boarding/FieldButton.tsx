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
    onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void
    onBlur?:(e:React.FocusEvent<HTMLInputElement>)=>void
    disabled?:boolean
    name:string
}

export default function FieldButton({children,name,text,error,placeholder,type="text",className,value,onChange,onBlur}:IFieldButton) {
  return (
    <div className={cn('relative mb-3 pb-2',className)}>
        <span className="block text-main font-medium mb-2">{text}</span>
        <input  value={value} onBlur={onBlur} onChange={onChange} type={type} name={name} className='h-10 rounded-lg text-foreground dark:bg-[#303131] bg-[#F1F5F9] focus-visible:shadow-[0_0_12px_#0000001f] dark:focus-visible:shadow-[#ffffff2f] px-2 outline-none w-full block' placeholder={placeholder}  />
        {children}
        {error && <span className='absolute -bottom-2 text-[12px] text-red-500 left-2'>{error}</span>}
    </div>
  )
}
