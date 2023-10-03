import React from 'react'
import { AnimatePresence ,motion} from 'framer-motion'
import { signInVariants } from '@/utils/XAnimation'
import useOnlineStatus from '@/hooks/useNetwork'

export default function Offline() {
    const isOnline = useOnlineStatus()
    return (
    <AnimatePresence>
        {!isOnline && <motion.div
        variants={signInVariants} initial="hidden" animate="animate" exit ="hidden"
         className='text-center py-[2px ] backdrop-blur-md flex-center justify-center text-xs bg-red-500 text-white backdrop-filter bottom-0 fixed w-full md:w-[calc(100%-270px)] xl:w-[calc(100%-(320px+260px))]'>
            <span>Trying to reconnect</span>
            <div className="rounded-full ml-2  animate-spin duration-1000 h-[12px] w-[12px] border-2 border-white  border-b-transparent"></div>
        </motion.div>}
    </AnimatePresence>
  )
}

