import UserAvatar from '@/components/utils/UserAvatar';
import React, { useRef } from 'react'
import { useTrimmedText } from '@/hooks/TextHooks';
import { isDateToday, shouldTrim } from '@/lib/utils';
import { PopoverTrigger ,Popover, PopoverContent} from '@/components/ui/popover';
import { IconTextButton } from '@/components/utils/IconTextButton';
import { Icons } from '@/utils/icons';
import Link from 'next/link';
import Image from 'next/image';
import { ICommunityMessage, IUser } from '@/store/interfaces';
import { useAppSelector } from '@/hooks/reduxHooks';
import Timeago from 'react-timeago'
import Linkify from 'linkify-react';

interface ISingleChat{
    message:ICommunityMessage
    prevUser?:IUser
    isPrivate:boolean
    justJoined:boolean
}

export default function SingleChat({message,prevUser,isPrivate,justJoined}:ISingleChat) {
    const {data:{username}} = useAppSelector((state=>state.user))
    const messageUser = message.messageUser
    const isrepeated = justJoined?false:messageUser.username === prevUser?.username
    const {text,isTrimmed,toggleText} = useTrimmedText(message.text,30)
    const isUser = username === messageUser.username
    const ref = useRef<HTMLDivElement>(null)
    const postedDate = new Date(message.createdAt)
    const isToday = isDateToday(message.createdAt)
    return (
    <div className={`flex  ${!isrepeated?"mb-2":"mb-4"} ${isUser?"justify-end":""}`}>
        {message.type !== "system"? <>
        {!isUser && !isPrivate &&
        <Popover>
            <PopoverTrigger asChild>
                <div ref={ref}>
                    <UserAvatar 
                        customLink=''
                        showStatus={!isrepeated}
                        isPrivate={false} 
                        username={messageUser.username}
                        theme={messageUser.profileTheme} 
                        src={messageUser.profileImage}
                        className={`h-9 w-9 cursor-pointer
                        ${isrepeated?"opacity-0":""}`}/>
                </div>  
            </PopoverTrigger>
            <PopoverContent className='px-0 py-1 relative max-sm:left-4'>
                <Link href="/">
                    <IconTextButton Icon={Icons.profile} text='View Profile' />
                </Link>
                <Link href={"/"}>
                    <IconTextButton Icon={Icons.messenger} text='Chat Privately'/>
                </Link>
            </PopoverContent>
        </Popover>
        }
        <div className={`w-fit ml-1 min-w-[100px] break-words xs:max-w-[80%] sm:max-w-[300px] md:max-w-[320px]  xl:max-w-[280px] px-2 py-1 rounded-md relative ${isUser?"bg-main text-white":"bg-background"}`}>
            <div className={`flex ${!isUser && !isPrivate?"justify-between mb-2":"mb-1 justify-end"}`}>
                {!isUser && !isPrivate && <span onClick={()=>{ref.current?.click()}} className='font-medium cursor-pointer'>{messageUser.username}</span> }
                <span className='text-[9px] ml-2'>
                    {isToday || <Timeago date ={postedDate}/> }    
                </span>   
            </div>
            {message.type === "text" ?<div className='max-sm:max-w-[200px]'>
                <Linkify>{text}</Linkify>
                {shouldTrim(30,message.text) && <button className='ml-2  font-medium' onClick={toggleText}>{isTrimmed?"less":"..more"}</button>}
            </div>:
            <>
            <div className='w-full rounded-md  overflow-hidden'>
                <div className='relative h-[165px] min-w-[200px]' >
                <Image fill  src={message.imageUrl || ""} alt="chat-image" className='object-cover mx-auto'/>
                </div>
             
            </div>
            {message &&  <div className='max-sm:max-w-[200px] break-words'>
                <span className='mt-3'><Linkify>{text}</Linkify></span>
                {shouldTrim(30,message.text) && <button className='ml-2  font-medium' onClick={toggleText}>{isTrimmed?"less":"..more"}</button>}
            </div> 
            }
            </>
            }
        </div>
        </>:<h1 className='text-center w-full text-shade text-[12px] my-3'>{message.text}</h1> }
    </div>
    )
}
