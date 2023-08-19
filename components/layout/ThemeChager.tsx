"use client"
import React from 'react'
import { useTheme } from 'next-themes'
import { Button } from '../ui/button'
import { Icons } from '@/utils/icons'

export default function ThemeChanger() {
  const {setTheme,theme} = useTheme()
  return (
    <Button
      variant={"ghost"} 
      size={"sm"}
      className='w-9 px-0 bg-main fixed z-40 bottom-2 right-2'
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    > 
      <Icons.sun className="rotate-0  scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icons.moon  className="absolute scale-0 dark:scale-100  rotate-90 transition-all dark:rotate-0 " />
    </Button>

  )
}
