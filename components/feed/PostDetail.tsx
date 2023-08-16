import React from 'react'
import { useTrimmedText } from '../hooks/TextHooks'
import { inputText } from '@/utils/constants'
import VideoPlayer from './VideoPlayer'

export interface IPostDetail{
  type:|"image" | "text" | "polls" | "video",
  wordLength?:number
}

export default function PostDetail({type,wordLength=12}:IPostDetail) {
  const {isTrimmed,toggleText,text} = useTrimmedText(inputText,wordLength)
  return (
    <>
    <h1>
      <span>{text}</span>
      <span onClick={toggleText} className='text-main py-4 cursor-pointer ml-2'>{isTrimmed?"show less":"...show more"}</span>
    </h1>
    {type === "image" && <div className="mt-3 aspect-[2/1]">
      <img src="/postimg.jpg" alt="post" className='h-full w-full object-cover'/>
    </div>}
    {type  === "video" && <VideoPlayer url='https://www.youtube.com/watch?v=lwPRcO8mgtc'/>}
    </>
  )
}
