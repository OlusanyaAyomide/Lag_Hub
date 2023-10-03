import React, { useRef, useState } from 'react'
import Logo from '../utils/Logo'
import { Icons } from '@/utils/icons'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { Input } from '../ui/input'
import { Dialog,DialogContent,DialogTrigger,} from '../ui/dialog'
import AutoComplete from './AutoComplete'
import { Popover,PopoverTrigger,PopoverContent } from '../ui/popover'
import { usePathname } from 'next/navigation'

interface LeftProps{
  className?:string
  refs:()=>void
}

export default function LeftHeader({className,refs}:LeftProps) {
   const ref = useRef<HTMLButtonElement>(null)
   const pathname =  usePathname()
   const isVideo = pathname === "/video" || pathname == "/reels"
   const [opened,setisOpened] = useState<boolean>(true)
  return (
    <div ref={refs} className={cn('w-full flex max-md:justify-between items-center',className)}>
      <Logo/>
         <div className='max-md:hidden flex items-center'>
            <Popover onOpenChange={(opened)=>{setisOpened(opened)}}>
               <PopoverTrigger asChild>
                  <Button ref={ref} variant={"ghost"} className={`max-md:hidden ${isVideo?"hidden":""}`}>
                     <Icons.search className='text-shade  text-2xl '/>
                  </Button>
               </PopoverTrigger>
               <PopoverContent asChild className='hidden min-h-[400px]  md:block w-[350px] py-3 relative left-24'>
                  <div>
                      <AutoComplete/>
                  </div>
               </PopoverContent>
            </Popover>
            {!opened && <Input placeholder='search' onClick={()=>{ref.current?.click()}} className='focus-visible:ring-0  max-xl:hidden ml-2 w-[250px]'/>}
         </div>
         <Dialog>
            <DialogTrigger asChild>
               <Button variant={"ghost"} size={"icon"} className='md:hidden'>
               <Icons.search className={`text-shade text-2xl ${isVideo?"hidden":""}`}/>
              </Button>
            </DialogTrigger>
            <DialogContent className='w-screen h-screen paddingx bg-background'>
               <AutoComplete/>
            </DialogContent>
         </Dialog>
   
    </div>
  )
}
