import { Dialog,DialogContent, DialogTrigger } from '@/components/ui/dialog'
import UserAvatar from '@/components/utils/UserAvatar'
import { Icons } from '@/utils/icons'
import Link from 'next/link'
import React from 'react'
import { trimSentence } from '@/lib/utils'
import CommunityInfo from './CommunityInfo'
import { Avatar ,AvatarFallback,AvatarImage} from '@/components/ui/avatar'

interface IChatHeader{
  backLink:string
  children:React.ReactNode
  title:string
  isPrivate:boolean
  isProfile?:boolean
  subHeading:string
  src:string
  isTyping?:string
}

export default function ChatHeader({children,backLink,title,isPrivate,isProfile=false,subHeading,src,isTyping}:IChatHeader) {
  return (
    <Dialog>  
            <div className='fixed-section pt-2 pl-2'>
              <Link href={backLink}>
                <button className='mr-2 ml-1 text-xl'>
                  <Icons.back/>
                </button>  
              </Link>
              <DialogTrigger asChild className='px-0 cursor-pointer'>
              <div className='flex grow'>
                <Avatar>
                  <AvatarFallback>Lh</AvatarFallback>
                  <AvatarImage src={src}/>
                </Avatar>
                <div className='grow ml-3'>
                  <h1 className="font-semibold ">{trimSentence(title,3)}</h1>
                  {!isTyping && !isPrivate && <span className='tinytext'>{subHeading}</span>}
                  {isTyping && <span className='text-main text-[11px]'>{isTyping} is typing
                   <span className='text-[8px] animate-all animate-bounce duration-1000'>...</span></span>}
                </div>
              </div>
              </DialogTrigger>
            </div>
        <DialogContent className={` ${isProfile?"":"default-scroll overflow-scroll max-h-[90vh]"} `}>
          {children}
        </DialogContent>
    </Dialog>
  )
}
