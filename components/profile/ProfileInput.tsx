import React from 'react'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils'


interface IProfileEdit{
    text:string
    placeholder?:string
    autofocus?:boolean
    className?:string
    value:string
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
    onBlur:(e:React.FocusEvent<HTMLInputElement>)=>void
    disabled?:boolean
    name:string
    error?:string

}


export default function ProfileInput({text,placeholder,autofocus,className,value,onChange,onBlur,name,error}:IProfileEdit) {
  return (
    <div className=' mb-3 pb-2 relative'>
    <span className="block mb-1 font-medium uppercase">{text}</span>
    <Input value={value} name={name} onChange={onChange} onBlur={onBlur} className={cn("focus-visible:ring-0",className)} autoFocus={autofocus} placeholder={placeholder}/>
    {error && <span className='absolute -bottom-2 text-[12px] text-red-500 left-2'>{error}</span>}

</div>
  )
}
