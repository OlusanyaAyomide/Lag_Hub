import React,{useState} from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import { Icons } from '@/utils/icons';
import { IInputType } from '../community/chat/SendMessage';

interface ILiamTextArea{
    disabled:boolean
    sendMessage:({text,type}:IInputType)=>void
}
export default function LiamTextArea({disabled,sendMessage}:ILiamTextArea) {
    const [text,setText] = useState("")
  return (
    <>
    <TextareaAutosize value={text} onChange={(e)=>{setText(e.target.value)}} disabled={disabled} placeholder='Enter message' className='w-full block my-1 mb-[2px] sm:mb-1 rounded-lg grow outline-none peer bg-accent focus-visible:border py-2 px-2 resize-none relative shadow-2xl' maxRows={4}>
    </TextareaAutosize>
    <button onClick={()=>{sendMessage({text,type:"text"});setText("")}} disabled={disabled} className='text-xl  peer-focus-visible:text-main  peer-focus-visible:block ml-1 mb-1'>
        <Icons.plane/>
    </button></>

  )
}
