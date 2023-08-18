import React,{useState} from 'react'
import ProfileInfo from '../feed/ProfileInfo'
import { IVideo } from '@/utils/interfaces'
import { Button } from '../ui/button'
import { Icons } from '@/utils/icons'
import { IconType } from 'react-icons/lib'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { useTrimmedText } from '../hooks/TextHooks'
import { shouldTrim } from '@/lib/utils'

interface IInfoBttons{
    Icon:IconType
    text:string
    value:number | string
}

export default function ReelsDetail(item:IVideo) {
    const {text,isTrimmed,toggleText} = useTrimmedText(item.title,16)
    const [shown,setShown] = useState(false)
    const InfoButtons=({Icon,value,text}:IInfoBttons)=>(
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button className='flex'><span className='mr-1 text-[10px] sm:text-[11px]'>{value}</span><Icon className='text-2xl mb-4 text-main'/> </button>
                </TooltipTrigger>
                <TooltipContent>{text}</TooltipContent>
            </Tooltip>
        </TooltipProvider>)
        
    return (
    <div className='tiktok-div mt-4 border'>
        <div className='absolute inset-0 py-2 px-2 sm:px-3 flex flex-col justify-between'>
            <ProfileInfo src={item.author.avatar} isVideo firstName={item.author.nickname}/>
            <div>
                <div className='flex justify-end'>
                    <Button size={"icon"} variant={"ghost"} onClick={()=>{setShown((prev=>!prev))}}>
                        {shown? <Icons.cancel className='text-2xl text-main'/>:<Icons.info className='text-2xl text-main'/>}
                       
                    </Button>
                    {shown && !isTrimmed &&
                    <div className='w-[50px] absolute bottom-20 flex flex-col items-end'>
                        <InfoButtons Icon={Icons.share} value={item.share_count} text='Shares'/>
                        <InfoButtons Icon={Icons.glasses} value={item.play_count} text='views'/>
                        <InfoButtons Icon={Icons.clock} value={item.duration} text='Duraion'/>
                    </div>}
                </div>
                <h1 className="mt-2 tinytext">
                    <span>{text}</span>
                    {shouldTrim(30,item.title) && <button className='ml-2 text-main font-medium' onClick={toggleText}>{isTrimmed?"show less":"...show more"}</button>}
                </h1>
            </div>
            
        </div>
    </div>  )
}
