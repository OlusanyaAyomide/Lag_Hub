import UserAvatar from '@/components/utils/UserAvatar';
import React from 'react'
import { useTrimmedText } from '@/components/hooks/TextHooks';
import { shouldTrim } from '@/lib/utils';

interface ISingleChat{
    user: string;
    message: string;
    time: string;
    isUser: boolean;
    prevUser:string
    type:string
    src?:string
}

export default function SingleChat({user,message,time,isUser,prevUser,type,src}:ISingleChat) {
    const isrepeated = user === prevUser
    const {text,isTrimmed,toggleText} = useTrimmedText(message,30)

    return (
    <div className={`flex  ${isrepeated?"mb-2":"mb-4"} ${isUser?"justify-end":""}`}>
        {!isUser && <UserAvatar className={`h-8 w-8 ${isrepeated?"opacity-0":""}`}/>}
        <div className={`w-fit ml-1 min-w-[100px] xs:max-w-[80%] sm:max-w-[300px] md:max-w-[320px]  xl:max-w-[280px] px-2 py-1 rounded-md relative ${isUser?"bg-main text-white":"bg-background"}`}>
            <div className={`flex ${!isUser?"justify-between mb-2":"mb-1 justify-end"}`}>
                {!isUser && <span className='font-medium'>{user}</span> }
                <span className='text-[8px]'>{time}</span>   
            </div>
            {type === "text" ?<>
                <span>{text}</span>
                {shouldTrim(30,message) && <button className='ml-2  font-medium' onClick={toggleText}>{isTrimmed?"show less":"...show more"}</button>}
            </>:
            <>
            <div className='w-full h-auto rounded-md overflow-hidden'>
                <img src={src} alt="chat-image" className='object-cover'/>
            </div>
            {message &&  <>
                <span className='block mt-2'>{text}</span>
                {shouldTrim(30,message) && <button className='ml-2  font-medium' onClick={toggleText}>{isTrimmed?"show less":"...show more"}</button>}
            </> 
            }
            </>
            }

        </div>
    </div>
    )
}
