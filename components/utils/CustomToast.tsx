import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { layoutActions } from '@/store/layoutSlice'
import { Icons } from '@/utils/icons'
import { AnimatePresence ,motion} from 'framer-motion'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { AlertAnimation } from '@/utils/XAnimation'
import { communityActions } from '@/store/communitySlice'

export default function CustomToast() {
    const {isActive,link,content} =useAppSelector((state=>state.layout.alert))
    const {isToast,link:comLink,content:comContent} = useAppSelector((state=>state.community.alert))
    const dispatch = useAppDispatch()
    useEffect(()=>{
        setTimeout(()=>{
            if(isActive){
                dispatch(layoutActions.closeAlert())
            }
            if(isToast){
                dispatch(communityActions.closeToast())
            }
        },8000)
    },[isActive,isToast])
    return (
    <AnimatePresence>
        {(isActive || isToast) &&   <motion.div variants={AlertAnimation} initial="initial" animate="animate" exit="exit"
         className='fixed z-50 max-w-[280px] sm:max-w-[380px] top-2 right-2 sm:right-4 h-fit backdrop-blur-sm bg-transparent border border-main py-2 px-10 rounded-md'>
            <button onClick={()=>{dispatch(layoutActions.closeAlert())}}
             className="absolute top-[2px] right-[2px] p-1 hover:bg-accent rounded-full text-xl hover:text-foreground text-shade"><Icons.cancel/></ button>
            <h1 className='font-medium'>{content || comContent}</h1>
            <Link href={link || comLink}>
                <button className="flex mx-auto text-main hover:underline decoration-main underline-offset-2 mt-2">
                <span>Click to view</span>
                <Icons.arrowUp className='text-lg'/>
                </button>
            </Link> 
        </motion.div>}
    </AnimatePresence>

  )
}
