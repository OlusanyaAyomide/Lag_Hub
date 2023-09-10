import React from 'react'
import { Button } from '../ui/button'
import { Dialog, DialogTrigger,DialogContent } from '../ui/dialog'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { IconType } from 'react-icons/lib'
import { cn } from '@/lib/utils'
import { Icons } from '@/utils/icons'
import { IconTextButton } from '../utils/IconTextButton'
import RePost from './RePost'
import { IPostDetail } from './PostDetail'
import { IPost } from '@/store/interfaces'

interface IButtons{
    Icon:IconType,
    className?:string,
    text:string
    onClick?:()=>void
    ngClass?:string
}
interface IPostButtons extends IPost{
  children:React.ReactNode

}

export  const Buttons = ({Icon,className,text,onClick,ngClass}:IButtons)=>(
  <Button variant={"ghost"} onClick={onClick} className={cn('w-4/12  flex',ngClass)}>
    <span className={cn('text-main relative right-[2px] text-xl',className)}><Icon/></span>
    <span className='text-xs'>{text}</span>
  </Button>
)

export default function PostButtons({children,...data}:IPostButtons){

   const isVideo = data.type ==="video" 
   return (
    <div className="flex  text-lg py-[2px] border-t">
    {!isVideo && <Buttons text='Like' Icon={Icons.thunbsup} className='text-[18px]'/>}
    <Popover>
     <PopoverTrigger  asChild>
       <button className={` ${!isVideo?"w-4/12":"w-6/12"} h-10 cursor-pointer hover:bg-accent flex items-center rounded-md justify-center`}>
         <span className='text-main relative right-[2px] text-[22px]'><Icons.repost/></span>
         <span className='text-xs font-medium'>Repost</span>
       </button>
     </PopoverTrigger>
     <PopoverContent className='py-1 px-0'>
       <Dialog>
         <DialogTrigger asChild>
            <div>
            <IconTextButton Icon={Icons.edit} text='Repost with your thoughts' ngClass='font-semibold' 
           extraText='Create new post with johnson post attached ' className='py-2'/>
            </div>
         </DialogTrigger>
         <DialogContent className='default-scroll overflow-scroll max-h-[90vh]'>
           <RePost {...data}/>
         </DialogContent>
       </Dialog>
       <IconTextButton Icon={Icons.repost} text='Repost' ngClass='font-semibold' 
       extraText='Instantly repost johnson post to your feed ' className='py-2'/>
     </PopoverContent>
    </Popover>
    {children}
   </div>
  )
}
