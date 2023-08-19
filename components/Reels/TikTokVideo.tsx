import { Icons } from '@/utils/icons';
import React, { useState, useRef } from 'react';

export default function TikTokVideo({src}:{src:string}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current?.pause()
        } else {
            videoRef.current?.play();
        }
        setIsPlaying(!isPlaying);
    };
  return (
    <>
     <video ref={videoRef} className='h-full w-full object-cover z-10' src={src} >     </video>
    </>
     



 
  )
}
