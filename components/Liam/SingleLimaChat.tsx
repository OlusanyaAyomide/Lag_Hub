import React from 'react'
import { useTrimmedText } from '../../hooks/TextHooks'
import { shouldTrim } from '@/lib/utils'
import { Icons } from '@/utils/icons'

interface ISingleLiamChat{
    text:string,
    isBot:boolean
}
export default function SingleLimaChat({text,isBot}:ISingleLiamChat) {
    const {text:updatedText,toggleText,isTrimmed} = useTrimmedText(text,30)
  return (
    <div className={`rounded-md pad w-fit max-w-[80%] mb-4 ${isBot?" flex":"ml-auto"}  min-w-[100px]`}>
        {isBot && <div className='h-10 w-10 mr-1 ml-2'>
          <Icons.robot className='text-3xl text-main'/>  
        </div>}
        <div className={`py-3 pad ${!isBot?"bg-main rounded-sm text-white":"bg-background shadow-sm rounded-md"} `}>
          <span>{updatedText}</span>
          {shouldTrim(30,text) && <button className='ml-2  font-medium' onClick={toggleText}>{isTrimmed?"show less":"...show more"}</button>}
        </div>

    </div>
  )
}
