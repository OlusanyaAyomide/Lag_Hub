import { Dialog,DialogContent, DialogTrigger } from '@/components/ui/dialog'
import UserAvatar from '@/components/utils/UserAvatar'
import { Icons } from '@/utils/icons'
import Link from 'next/link'
import React from 'react'
import { trimSentence } from '@/lib/utils'
import CommunityInfo from './CommunityInfo'

export default function ChatHeader() {
  const isTyping = false
  return (
    <Dialog>
        <DialogTrigger asChild className='px-0 cursor-pointer'>
            <div className='fixed-section'>
              <Link href={"/community"}>
                <button className='mr-2 ml-1 text-xl'>
                  <Icons.back/>
                </button>  
              </Link>
              <UserAvatar/>
              <div className='grow ml-3'>
                <h1 className="font-semibold ">{trimSentence("React Developers  and big Heads",3)}</h1>
                {!isTyping && <span className='tinytext'>Adebola,Lawrence and 16 others</span>}
                {isTyping && <span className='text-green-500 text-[10px]'>Johnson is typing
                 <span className='text-[8px] animate-all animate-bounce duration-1000'>...</span></span>}
              </div>
            </div>
        </DialogTrigger>
        <DialogContent className='max-h-[90vh]  default-scroll overflow-scroll'>
          <CommunityInfo/>
        </DialogContent>
    </Dialog>
  )
}
