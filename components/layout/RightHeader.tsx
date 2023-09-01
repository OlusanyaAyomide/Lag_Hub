import { cn } from '@/lib/utils'
import React from 'react'
import { Avatar ,AvatarFallback,AvatarImage} from '../ui/avatar'
import { Button } from '../ui/button'
import { Icons } from '@/utils/icons'
import { Popover, PopoverTrigger,PopoverContent } from '../ui/popover'
import ProfilePreview from '../utils/ProfilePreview'
import { Separator } from '../ui/separator'
import Link from 'next/link'
import socket from '@/sockets/sockets'

export default function RightHeader({className}:{className?:string}) {
  return (
    <div className={cn("flex justify-end items-center max-md:hidden",className)}>
      <Button size={"icon"} variant={"ghost"}>
         <Icons.dots className='text-shade text-2xl'/>
      </Button>
      <div className="flex items-center">
      <Avatar className='z-30'>
         <AvatarImage src='/profile.png'/>
         <AvatarFallback>Lh</AvatarFallback>
      </Avatar>
      <Popover>
         <PopoverTrigger asChild>
          <Button size={"icon"} variant={"ghost"} className='px-0 mx-0 relative right-2 hover:bg-background'>
            <Icons.dropdown className='text-2xl text-shade'/>  
         </Button>
         </PopoverTrigger>
         <PopoverContent className='relative right-4 px-0'>
            <ProfilePreview style='md:block'/>
            <Separator className='my-6'/>
            <div className='mt-2'>
              {/* <Link href={"/"}> */}
                <Button onClick={()=>{socket.connect()}} className='hover:bg-accent px-2 text-foreground bg-background w-full py-2 my-2 flex justify-start items-center'>
                  <Icons.settings className='text-2xl text-shade'/>
                  <span className='ml-2'>Settings and privacy</span>
                </Button>
              {/* </Link> */}
              <Button onClick={()=>{socket.disconnect()}} className='hover:bg-accent  px-2 text-foreground bg-background w-full py-2 my-2 flex justify-start items-center'>
                <Icons.logout className='text-2xl text-shade'/>
                <span className='ml-2'>Logout</span>
              </Button>
            </div>
         </PopoverContent>
      </Popover>

      </div>

    </div>
  )
}
