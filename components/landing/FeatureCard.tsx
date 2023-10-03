import { cn } from '@/lib/utils'
import React from 'react'
import { IconType } from 'react-icons/lib'
import { useInView } from 'react-intersection-observer'
import { cardVariants } from '@/utils/XAnimation'
import { motion } from 'framer-motion';

interface IFeatureCard{
    text:string
    Icon:IconType   
    style:string
    header:string
    className?:string
}
export default function FeatureCard({style,Icon,text,header,className}:IFeatureCard) {
    const [ref, inView] = useInView({triggerOnce: true, threshold: 0.2});
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={cardVariants}
    className={cn('rounded-md mx-1 w-[250px] backdrop-blur-[2px] cursor-pointer hover:bg-background duration-300 backdrop-filter mb-4 shadow-[0_0_12px_#0000001f] dark:shadow-[0_0_16px_#ffffff1f] px-3  py-4',className)}>
        <div className={cn("rounded-full h-12 w-12 my-2 flex-center justify-center")} style={{backgroundColor:style}}>
            <Icon className='text-white text-2xl'/>
        </div>
        <h1 className='font-semibold text-sm mb-2'>{header}</h1>
        <p>{text}</p>
    </motion.div>
  )
}

