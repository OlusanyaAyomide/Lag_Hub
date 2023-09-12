import React, { useState } from 'react'
import UserAvatar from '../utils/UserAvatar'
import { Button } from '../ui/button'
import { Icons } from '@/utils/icons'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { useAppSelector } from '@/hooks/reduxHooks'


export default function CollectivePost({children,className}:{children:React.ReactNode,className?:string}) {
   const [postTo,setPostTo] = useState<"Anyone" | "Followers">("Anyone")
   const [isOpened,setisOpened] = useState<boolean>(false)
   const {firstName,lastName} = useAppSelector((state=>state.user.data))
  return (
   <div className={className}>
      <div className='flex items-center '>
        <UserAvatar/>
        <div className='grow flex ml-2'>
            <div>  
               <h1 className="font-semibold text-lg">{firstName} {lastName}</h1>
               <h1 className='-mt-1'>Post to {postTo}</h1>
            </div>
            <Popover  open={isOpened}>
               <PopoverTrigger asChild>
                  <Button variant={"ghost"} size={"icon"} onClick={()=>{setisOpened(true)}}>
                     <Icons.dropdown className='text-2xl text-shade'/>
                  </Button>
               </PopoverTrigger>
               <PopoverContent side='bottom' className='px-0 py-3 relative sm:left-32' 
               onFocusOutside={()=>{setisOpened(false)}}>
                  <div onClick={()=>{setPostTo("Anyone");setisOpened(false)}} className='mb-1 cursor-pointer pad hover:bg-accent'>
                     <h1 className='font-semibold flex text-base items-center'>
                        <span>Anyone</span>
                        <Icons.earth className='ml-3 text-main text-xl'/>
                     </h1>
                     <span className='block '>Anyone on lahGub can see your post</span>
                  </div>
                  <div  onClick={()=>{setPostTo("Followers");setisOpened(false)}} className='w-full cursor-pointer pad hover:bg-accent'>
                     <h1 className='font-semibold flex text-base items-center'>
                        <span>Followers Only</span>
                        <Icons.friends className='ml-3 text-main text-xl'/>
                     </h1>
                     <span className='block'>Only your followers can see this post</span>
                  </div>
               </PopoverContent>
            </Popover>
        </div>
      </div>
      {children}
   </div>
  )
}
