import { cn } from '@/lib/utils'
import React, { useRef } from 'react'
import { Avatar ,AvatarFallback,AvatarImage} from '../ui/avatar'
import { Button } from '../ui/button'
import { Icons } from '@/utils/icons'
import { Popover, PopoverTrigger,PopoverContent } from '../ui/popover'
import ProfilePreview from '../utils/ProfilePreview'
import { Separator } from '../ui/separator'
import socket from '@/sockets/sockets'
import UserAvatar from '../utils/UserAvatar'
import { AlertDialog,AlertDialogCancel,AlertDialogContent, AlertDialogTrigger } from '../ui/alert-dialog'
import LogOutAlert from './LogOutAlert'
import SwitchTheme from '../utils/SwitchTheme'


export default function RightHeader({className}:{className?:string}) {
  const ref = useRef<HTMLButtonElement>(null)
  return (
    <div className={cn("flex justify-end items-center max-md:hidden",className)}>
      <Button size={"icon"} variant={"ghost"}>
         <Icons.dots className='text-shade text-2xl'/>
      </Button>
      <div className="flex items-center">
      <UserAvatar/>
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
                <SwitchTheme/>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <div>
                       <Button className='hover:bg-accent rounded-none   px-5 text-foreground text-[13px]  bg-background w-full py-2 my-2 flex justify-start items-center'>
                         <Icons.logout className='text-xl text-shade'/>
                          <span className='ml-2'>Logout</span>
                      </Button>
                    </div>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogCancel className='hidden' ref={ref}></AlertDialogCancel>
                    <LogOutAlert closeref={ref}/>
                  </AlertDialogContent>
                </AlertDialog>

            </div>
         </PopoverContent>
      </Popover>

      </div>

    </div>
  )
}
