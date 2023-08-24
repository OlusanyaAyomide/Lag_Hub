import { LIamChatDemo } from '@/utils/constants'
import { Icons } from '@/utils/icons'
import React from 'react'
import SingleLimaChat from './SingleLimaChat'
import TextareaAutosize from 'react-textarea-autosize';
import Link from 'next/link';
import SendMessage from '../community/chat/SendMessage';
import { cn } from '@/lib/utils';

export default function MainChat({className}:{className?:string}) {
  return (
    <div className={cn(`h-full pb-12  relative z-50`,className)}>
      {className && <div className='bg-background'>
        <div className="shadow-sm border-b relative py-2 bg-background text-transparent bg-clip-text bg-gradient-to-b from-main to-foreground">
          <h1 className="text-2xl sm:text-3xl font-bold text-center">HI JOHNSON</h1>
          <h1 className='text-center font-medium bigtext flex justify-center'><span>I Am Liam</span> <Icons.robot className='text-lg text-main relative top-[2px]'/> <span>, An AI assistant</span></h1>
         </div>
      </div>}
      {!className && 
            <div className='fixed-section scroll-py-24'>
            <Link href={"/"}>
              <button className='mr-2 ml-1 text-xl'>
                <Icons.back/>
              </button>  
            </Link>
            <Icons.robot className='text-3xl text-main'/>
              <h1 className="font-semibold grow ml-3 bigtext">Liam</h1>
          </div>
      }
      
      <div className="pt-2">
        {LIamChatDemo.map((item,key)=>(
          <SingleLimaChat key={key} {...item}/>
        ))}
      </div>

      {className?<div className={`flex items-end fixed  pb-1 w-full bg-background ${className?"max-w-[512px] bottom-0":"bottom-0"} px-2`}>
        <TextareaAutosize placeholder='Enter message' className='w-full block my-1 mb-[2px] rounded-lg grow outline-none peer bg-accent focus-visible:border py-2 px-2 resize-none relative shadow-2xl' maxRows={4}>
        </TextareaAutosize>
        <button className='text-xl  peer-focus-visible:text-main  peer-focus-visible:block ml-1 mb-1'>
        <Icons.plane/>
        </button>
      </div>:<SendMessage isLiam/>}

 
    </div>

    )
}
