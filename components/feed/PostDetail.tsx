import React from 'react'
import { useTrimmedText } from '../hooks/TextHooks'
import { inputText } from '@/utils/constants'


export default function PostDetail() {
  const {isTrimmed,toggleText,text} = useTrimmedText(inputText,12)
  const type = "image"
  return (
    <>
    <h1>
      <span>{text}</span>
      <span onClick={toggleText} className='text-main py-4 cursor-pointer ml-2'>{isTrimmed?"show less":"...show more"}</span>
    </h1>
    {type === "image" && <div className="mt-3 aspect-[2/1]">
      <img src="/postimg.jpg" alt="post" className='h-full w-full object-cover'/>
    </div>}
    </>
  )
}
