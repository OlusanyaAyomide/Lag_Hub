import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { layoutActions } from '@/store/layoutSlice'
import { Icons } from '@/utils/icons'
import { AnimatePresence ,motion} from 'framer-motion'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { AlertAnimation } from '@/utils/XAnimation'

export default function CustomToast() {
    const {isActive,link,content} =useAppSelector((state=>state.layout.alert))
    const dispatch = useAppDispatch()
    useEffect(()=>{
        setTimeout(()=>{
            if(isActive){
                dispatch(layoutActions.closeAlert())
            }
        },8000)
    },[isActive])
    return (
    <AnimatePresence>
        {isActive &&   <motion.div variants={AlertAnimation} initial="initial" animate="animate" exit="exit"
         className='fixed z-50 top-2 right-4 h-fit backdrop-blur-sm bg-transparent border border-main py-2 px-10 rounded-md'>
            <button onClick={()=>{dispatch(layoutActions.closeAlert())}}
             className="absolute top-[2px] right-[2px] text-xl hover:text-black text-shade"><Icons.cancel/></ button>
            <h1 className='font-medium'>{content}</h1>
            <Link href={link}>
                <button className="flex mx-auto text-main hover:underline decoration-main underline-offset-2 mt-2">
                <span>Click to view</span>
                <Icons.arrowUp className='text-lg'/>
                </button>
            </Link> 
        </motion.div>}
    </AnimatePresence>

  )
}
