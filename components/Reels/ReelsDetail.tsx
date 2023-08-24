import React,{useState,useRef} from 'react'
import ProfileInfo from '../feed/ProfileInfo'
import { IVideo } from '@/utils/interfaces'
import { Button } from '../ui/button'
import { Icons } from '@/utils/icons'
import { IconType } from 'react-icons/lib'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { useTrimmedText } from '../hooks/TextHooks'
import { shouldTrim } from '@/lib/utils'
import ReactPlayer from 'react-player'
import { useHydration } from '../hooks/useHydration'
import TikTokVideo from './TikTokVideo'
import Link from 'next/link'

interface IInfoBttons{
    Icon:IconType
    text:string
    value:number | string
}

export default function ReelsDetail(item:IVideo) {
    const {text,isTrimmed,toggleText} = useTrimmedText(item.title,16)
    const [shown,setShown] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const {isRendered} = useHydration()
    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current?.pause()
        } else {
            videoRef.current?.play();
        }
        setIsPlaying(!isPlaying);
    };
    const InfoButtons=({Icon,value,text}:IInfoBttons)=>(
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button className='flex'><span className='mr-1 text-[10px] sm:text-[11px]'>{value}</span><Icon className='text-2xl mb-4 text-main'/> </button>
                </TooltipTrigger>
                <TooltipContent className='bg-transparent'>{text}</TooltipContent>
            </Tooltip>
        </TooltipProvider>)
        
    return (
    <div className='tiktok-div mt-4  text-white'>
        <Link href={"/"} className='fixed top-1 left-1 sm:hidden'><Icons.back className='text-2xl text-white'/></Link>
        <div className='absolute z-20 inset-0 pb-1 px-2 sm:px-3 flex flex-col justify-between'>
            <ProfileInfo  src={item.author.avatar} isVideo firstName={item.author.nickname}/>
            <div>
                <div className='flex justify-end'>
                    <button onClick={()=>{setShown((prev=>!prev))}}>
                        {shown? <Icons.cancel className='text-2xl '/>:<Icons.info className='text-2xl'/>}
                    </button>
                    {shown && !isTrimmed &&
                    <div className='w-[50px] absolute  bottom-20 flex flex-col items-end'>
                        <InfoButtons Icon={Icons.share} value={item.share_count} text='Shares'/>
                        <InfoButtons Icon={Icons.glasses} value={item.play_count} text='views'/>
                        <InfoButtons Icon={Icons.clock} value={item.duration} text='Duraion'/>
                    </div>}
                </div>
                <button className='text-3xl text-white absolute bottom-8 z-30' onClick={togglePlay}>
                    {isPlaying?<Icons.pause/>:<Icons.play/>} 
                </button>
                <h1 className="mt-2 tinytext">
                    <span>{text}</span>
                    {shouldTrim(30,item.title) && <button className='ml-2  font-medium' onClick={toggleText}>{isTrimmed?"show less":"...show more"}</button>}
                </h1>
            </div>
        </div>

        <div className="z-10 absolute inset-0 rounded-md overflow-hidden">
            <video ref={videoRef} className='h-full w-full object-cover z-10' src={item.play}></video> 
        </div>
    </div>  )
}
