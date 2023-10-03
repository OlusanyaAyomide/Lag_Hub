import React from 'react'
import Heroheader from './Heroheader'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { Icons } from '@/utils/icons'
import { AnimatePresence, motion} from 'framer-motion'
import { herosvgAnimation, signInVariants } from '@/utils/XAnimation'
import {Link} from "react-scroll"

export default function Hero() {
    const {ref,inView} = useInView({threshold:0.1})
  return (
    <div className='pt-12 min-h-[100vh] relative'>
        <Heroheader/>
        <div className='mt-12 sm:mt-16 max-w-[500px] mx-auto'>
            <div ref={ref} className="bg-background border w-fit mx-auto shadow-md py-[2px] mb-2 px-8 rounded-md">
                <span  className='text-xs text-purple-600 font-semibold'>view events in real time</span>
            </div>
            <div>
                <h1 className='text-3xl text-center sm:text-[40px] md:text-5xl font-bold'>
                    <span>Make</span>
                    <span className='text-main ml-2'>Connections</span>
                </h1>
                <h1 className="mt-1 text-3xl text-center sm:text-[40px] md:text-5xl font-bold">That Matters</h1>
            </div>
            <div className="sm:mt-4 relative  h-[300px] sm:h-[380px]">
                <div 
                 className="absolute z-30 inset-0 flex-cente w-full justify-center ">
                    <Image src="/landing.svg" fill className='w-full mx-auto block max-w-[280px] md:max-w-[420px] sm:max-w-[400px] h-full' alt="BufferLogo" />
                </div>
                <div className="absolute z-20 inset-0 grid place-items-center">
                    <div className="h-[130px] animate-spinner w-[130px] rounded-full border-transparent border-t-purple-600/70 border-r-purple-600/70 border-[8px]"></div>
                </div>
                <div className="absolute z-20 inset-0 grid place-items-center">
                    <div className="h-[230px] opacity-50 animate-herospin2 w-[230px] rounded-full border-transparent border-t-main border-r-main border-[8px]"></div>
                </div>
            </div>
        </div> 
        <AnimatePresence>
        {inView &&
            <Link to={"get-started"} duration={1000} smooth offset={-50} >
                <motion.div  variants={signInVariants} initial='hidden' animate='animate' exit='hidden'
                className="fixed h-[105px] cursor-pointer hover:bg-accent w-[105px] -bottom-[52.5px] left-[calc(50%-52.5px)] z-50 sm:w-[20vh] sm:h-[20vh] sm:-bottom-[8vh] sm:left-[calc(50%-10vh)]  rounded-full bg-background px-2 full-shadow  flex justify-center">
                <div className="flex flex-col items-center pt-3 text-main h-[75px]">
                    <h1 className="text-center text-base">SignIn</h1>
                    <h1 className="text-center -mt-2"><Icons.arrowdown className='text-2xl animate-arrowdown'/></h1>
                </div>
            </motion.div>
            </Link>
        }
        </AnimatePresence>
    </div>
  )
}
