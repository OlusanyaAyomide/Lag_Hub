import { Dialog,DialogContent, DialogTrigger } from '@/components/ui/dialog'
import UserAvatar from '@/components/utils/UserAvatar'
import { Icons } from '@/utils/icons'
import Link from 'next/link'
import React from 'react'
import { trimSentence } from '@/lib/utils'
import CommunityInfo from './CommunityInfo'
import { Avatar ,AvatarFallback,AvatarImage} from '@/components/ui/avatar'
import { isDateToday } from '@/lib/utils'
import Timeago from 'react-timeago'

interface IChatHeader{
  backLink:string
  children:React.ReactNode
  title:string
  isPrivate:boolean
  isProfile?:boolean
  subHeading?:string
  src:string
  isTyping?:string
  profileTheme?:string
  lastOnline?:string 
  isOnline?:boolean

}

export default function ChatHeader({children,backLink,title,isPrivate,isProfile=false,subHeading,src,isTyping,profileTheme,lastOnline,isOnline}:IChatHeader) {
  const lastOnlineDate = isPrivate?new Date(lastOnline || ""):false
  const isToday = lastOnline?isDateToday(lastOnline):false
  const showDate = isPrivate && !isTyping
  return (
    <Dialog>  
            <div className='fixed-section pt-2 pl-2'>
              <Link href={backLink}>
                <button className='mr-2 ml-1 text-xl'>
                  <Icons.back/>
                </button>  
              </Link>
              <DialogTrigger asChild className='px-0 cursor-pointer'>
              <div className='flex-center grow'>
                {isPrivate?<UserAvatar  isPrivate={false} src={src} theme={profileTheme}/> :
                <Avatar>
                  <AvatarFallback>Lh</AvatarFallback>
                  <AvatarImage src={src}/>
                </Avatar>}
                <div className='grow ml-3'>
                  <h1 className={`font-semibold ${isPrivate?"text-sm":""} `}>{trimSentence(title,3)}</h1>
                  {!isTyping && !isPrivate && <span className='tinytext'>{subHeading}</span>}

                  {showDate && <>
                  {isOnline?<span className='tinytext text-green-500'>online</span>:<span   className='text-[11px]'><span className='mr-1'>last online</span>
                    {isToday?isToday:lastOnlineDate?<Timeago date={lastOnlineDate}/>:""}
                  </span>}
                  </> }

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
