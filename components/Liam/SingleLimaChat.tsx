import React from 'react'
import { useTrimmedText } from '../../hooks/TextHooks'
import { shouldTrim } from '@/lib/utils'
import { Icons } from '@/utils/icons'
import { IAiSingleChat } from '@/store/interfaces'
import Timeago from 'react-timeago'
import { isDateToday } from '@/lib/utils'


export default function SingleLimaChat({message,createdAt,type}:IAiSingleChat) {

  const {text:updatedText,toggleText,isTrimmed} = useTrimmedText(message,40)
  const isToday =createdAt?isDateToday(createdAt):""
  const postedDate = createdAt?new Date(createdAt):new Date()
  const isBot = type === "ai"
  return (
    <div className={`rounded-md pad w-fit max-w-[80%] mb-4 ${isBot?" flex":"ml-auto"}  min-w-[100px]`}>
        {isBot && <div className='h-10 w-10 mr-1 ml-2'>
          <Icons.robot className='text-3xl text-main'/>  
        </div>}
        <div className={`py-1 pad ${!isBot?"bg-main rounded-sm text-white":"bg-background shadow-sm rounded-md"} `}>
          {createdAt && <h1 className="text-[9px] w-full text-end">{isToday || <Timeago date ={postedDate}/>}</h1>}
          <span>{updatedText}</span>
          {shouldTrim(30,message) && <button className='text-main font-medium' onClick={toggleText}>{isTrimmed?"..less":"..more"}</button>}
        </div>

    </div>
  )
}
