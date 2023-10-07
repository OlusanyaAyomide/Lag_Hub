import React from 'react'
import { useTrimmedText } from '../../hooks/TextHooks'
import { inputText } from '@/utils/constants'
import VideoPlayer from './VideoPlayer'
import Image from 'next/image'
import { shouldTrim } from '@/lib/utils'
import Linkify from 'linkify-react';

export interface IPostDetail{
  type:|"image" | "text"  | "video",
  wordLength?:number
  url:string
  postText:string
  buttonref?:React.RefObject<HTMLButtonElement>
}

export default function PostDetail({type,wordLength=12,url,postText,buttonref}:IPostDetail) {
  const {isTrimmed,toggleText,text} = useTrimmedText(postText,wordLength)
  if(type==="image"){
  }
  return (
    <div className='break-words'>
    <h1>
      <Linkify options={{}}>
        <h1 className='break-words w-full'>{text}</h1>
      </Linkify>
      {shouldTrim(wordLength,postText) && <span onClick={toggleText} className='text-main py-4 cursor-pointer ml-2'>{isTrimmed?"less":"..more"}</span>}
    </h1>
    {type === "image" && <div onClick={()=>{buttonref?.current?.click()}} 
    className="mt-3 aspect-[2/1.3] sm:aspect-[2/1.1] relative">
        <Image  src={url} fill alt="post"  className='w-full h-full'/>
            {/* <img src="/postimg.jpg" alt=""  className='h-full w-full'/> */}
    </div>}
    {type  === "video" &&  <VideoPlayer url={url}/>}
    </div>
  )
}
