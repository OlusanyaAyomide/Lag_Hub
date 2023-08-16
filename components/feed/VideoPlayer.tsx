import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import {useHydration} from '../hooks/useHydration'
import { useInView } from 'react-intersection-observer'

export default function VideoPlayer({url}:{url:string}) {
   const [isPlaying,setIsPlaying] = useState(false)
   const {ref,inView,entry} = useInView({threshold:0.1})
   const {isRendered} = useHydration()
   useEffect(()=>{
      if(!entry){return}
      if(inView){
         setTimeout(()=>{setIsPlaying(inView)},4000)
      }else{setIsPlaying(inView)}
    
   },[inView])
   
  return (
    <div className='aspect-video mt-2' ref={ref}>
        {/* {isRendered && <ReactPlayer  
        playing={isPlaying} 
        onPlay={()=>{setIsPlaying(true)}}
        onPause={()=>{setIsPlaying(false)}}
        url={url} controls width="100%" height="100% "/>} */}
          {isRendered && <ReactPlayer  
        url={url} controls width="100%" height="100% "/>}
    </div>
  )
}
