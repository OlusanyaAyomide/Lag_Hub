import React from 'react'
import { useTheme } from 'next-themes'
import { Button } from '../ui/button'
import { Icons } from '@/utils/icons'

export default function SwitchTheme() {
  const {theme,setTheme} = useTheme()
  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`flex justify-start  py-6 md:py-4 rounded-none max-md:mb-2 relative items-center w-full active:bg-transparent`} variant={"ghost"}>
    <span className='text-2xl text-shade'>
      {theme === "light"?<Icons.moon/>:<Icons.rsun/>}
    </span>
    <span className={`ml-2 max-md:text-base md:text-sm `}>{theme === "light"?"go Dark":"go Light"}</span>
 </Button>
  )
}
