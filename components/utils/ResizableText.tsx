import { cn } from '@/lib/utils'
import React,{useRef,useState} from 'react'


interface IResizableText{
  placeholder?:string
  className?:string
}

export default function ResizableText({placeholder,className}:IResizableText) {
  const ref = useRef<HTMLTextAreaElement >(null)
  const [text,setText] = useState("")
  const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    const scrollHeight  = ref.current?.scrollHeight || 0
    const textArea = ref.current
    if(textArea){
      textArea.style.height = scrollHeight + 'px';
    }
    setText(e.target.value)
  }
  return (
    <textarea value={text} onChange={handleChange} ref={ref} placeholder={placeholder} className={cn('outline-none bg-transparent block w-full mt-4 pad h-fit max-h-[250px]',className)}></textarea>
  )
}