import React,{useState,useRef,useEffect} from 'react'
import { Icons } from '@/utils/icons'
import { IconType } from 'react-icons/lib'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { useTrimmedText } from '../../hooks/TextHooks'
import { shouldTrim } from '@/lib/utils'
import { useHydration } from '../../hooks/useHydration'
import CustomAvatar from '../utils/CustomAvatar'
import { ITiktokVideos } from '@/store/interfaces'
import { motion } from 'framer-motion'
import { pauseAnimation } from '@/utils/XAnimation'
import {useInView} from "react-intersection-observer"

interface IInfoBttons{
    Icon:IconType
    text:string
    value:number | string
}

export default function ReelsDetail(item:ITiktokVideos) {
    const {text,isTrimmed,toggleText} = useTrimmedText(item.title,16)
    const [shown,setShown] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const {entry,inView,ref} = useInView({threshold:0.2,})

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
                    <button className='flex'><span className='mr-1 text-[10px] sm:text-[11px]'>{value}</span><Icon className='text-2xl mb-4 text-white'/> </button>
                </TooltipTrigger>
                <TooltipContent className='bg-transparent'>{text}</TooltipContent>
            </Tooltip>
        </TooltipProvider>)

    useEffect(()=>{
        if(!entry){return}
        if(videoRef.current){
            if(!inView){
                videoRef.current?.pause(),setIsPlaying(false)
            }
        }
    },[inView,entry])
    return (
    <div className='tiktok-div mb-4 px-0 bg-shade text-white ' ref={ref}>
        <div className='absolute z-20 inset-0 pb-1 px-2 sm:px-3 flex flex-col justify-between'>
            <div className="flex-center mt-1">
                <CustomAvatar src={item.author.avatar}/>
                <h1 className='font-medium ml-1'>{item.author.nickname}</h1>
            </div>
            <div className='relative h-full grid place-content-center cursor-pointer' onClick={togglePlay}>
                <div className="absolute inset-0">
                    <div className='flex justify-end z-30'>
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
                </div>
                <button className='text-5xl text-white relative z-30' onClick={togglePlay}>
                    {isPlaying?
                        <motion.span variants={pauseAnimation} initial="initial" animate="animate">
                            <Icons.pause />
                        </motion.span> :
                    <Icons.play/>} 
                </button>
            </div>
            <h1 className="mt-2 tinytext">
                <span>{text}</span>
                {shouldTrim(30,item.title) && <button className='ml-2  font-medium' onClick={toggleText}>{isTrimmed?"less":"..more"}</button>}
            </h1>
        </div>

        <div className="z-10 absolute inset-0 rounded-md overflow-hidden">
            <video loop ref={videoRef} className='h-full w-full object-cover z-10' src={item.play}></video> 
        </div>
    </div>  )
}
