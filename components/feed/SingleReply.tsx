import React from 'react'
import { shouldTrim, trimAndAppend } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import Link from 'next/link'
import { useTrimmedText } from '../../hooks/TextHooks';

interface ISingleReplyitems{
    comment?: string;
    time?: string;
    isDetailed:boolean,
} 

export default function SingleReply(items:ISingleReplyitems | undefined) {
    const {text,isTrimmed,toggleText} = useTrimmedText(items?.comment?items.comment:"",30)
    return (
    <div  className='w-full pl-4 mb-2 mt-1 flex  sm:pl-8'>
        <Avatar className='w-6 h-6'>
          <AvatarFallback>Lh</AvatarFallback>
          <AvatarImage src='/profile.png'/>
        </Avatar>
        <div className='ml-1 sm:ml-2 bg-accent/50 rounded-md pad py-1'>
            <h1 className='mb-1'>
              <span className="font-semibold">Ayomide Johnson</span>
              <span className='text-[11px] ml-1 sm:text-xs font-light'>2w ago</span>
            </h1>
          <div>
            <>
            {items?.isDetailed?
                  <h1>{text}
                   {shouldTrim(30,items?.comment) && <button className='ml-2 text-main font-medium' onClick={toggleText}>{isTrimmed?"show less":"...show more"}</button>}</h1>
                  :<>
                    <span>{trimAndAppend(20,items?.comment)}</span>
                    {shouldTrim(20,items?.comment) && <Link className='ml-2 font-medium text-main hover:text-underline' href={"/post/detail/1234"}>see more..</Link>} 
                  </>
                  }
            </>
            </div>
        </div>
    </div>
  )
}
