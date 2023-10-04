import React from 'react'
import Logo from '../utils/Logo'
import { Button } from '../ui/button'
import { useTheme } from 'next-themes'
import { Icons } from '@/utils/icons'
import Link from 'next/link'


export default function Heroheader() {
    const {theme,setTheme} = useTheme()
  return (
    <div className="fixed landingpad z-40 backdrop-blur-md  top-0 w-full  backdrop-filter py-1 flex-center justify-between">
        <Logo className='w-[130px] sm:scale-110'/>
        <div className='flex-center'>
            <Button 
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            variant={"ghost"} size={'icon'} className='text-2xl text-shade mr-2 h-8 active:bg-transparent '>
                {theme === "light"?<Icons.moon/>:<Icons.rsun/>}
            </Button>
            <Link href={"/boarding/signin"} className=' hover:no-underline'>
                <Button className='bg-main px-6  dark:hover:bg-foreground dark:hover:text-main text-white h-8 flex items-center justify-center'>
                    Sign in
                </Button>
            </Link>

        </div>

    </div>
  )
}
