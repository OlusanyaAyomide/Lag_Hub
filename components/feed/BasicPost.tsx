import React,{useRef} from 'react'
import { Card } from '../ui/card'
import IsShared from './IsShared'
import ProfileInfo from './ProfileInfo'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Icons } from '@/utils/icons'
import PostInfo from './PostInfo'
import { Button } from '../ui/button'
import { IconType } from 'react-icons/lib'
import { cn } from '@/lib/utils'
import { IconTextButton } from '../utils/IconTextButton'
import PostDetail from './PostDetail'
import { Dialog, DialogTrigger,DialogContent } from '../ui/dialog'
import RePost from './RePost'
import PostComment from './PostComment'

interface IButtons{
  Icon:IconType,
  className?:string,
  text:string
  onClick?:()=>void
  ngClass?:string
}

export default function BasicPost() {
  const isSharing = true
  const Buttons = ({Icon,className,text,onClick,ngClass}:IButtons)=>(
    <Button variant={"ghost"} onClick={onClick} className={cn('w-4/12  flex',ngClass)}>
      <span className={cn('text-main relative right-[2px] text-xl',className)}><Icon/></span>
      <span className='text-xs'>{text}</span>
    </Button>
  )
  return (
    <Card className='mt-3 pad relative py-2'>
      {isSharing && <IsShared/>}
      <div>
        <ProfileInfo/>
      </div>
      <div className="mt-3 px-1">
        <PostDetail/>
        <div className="mt-1">
          <div className='flex justify-between text-[10px] my-2  sm:text-[11px]'>
            <span>246 reactions</span>
            <span>26 reposts</span>
          </div>
          <div className="flex  text-lg py-[2px] border-t">
           <Buttons text='Like' Icon={Icons.thunbsup} className='text-[18px]'/>
           <Popover>
            <PopoverTrigger  asChild>
              <button className='w-4/12 h-10 cursor-pointer hover:bg-accent flex items-center rounded-md justify-center'>
                <span className='text-main relative right-[2px] text-[22px]'><Icons.repost/></span>
                <span className='text-xs font-medium'>Repost</span>
              </button>
            </PopoverTrigger>
            <PopoverContent className='py-1 px-0'>
              <Dialog>
                <DialogTrigger>
                  <IconTextButton Icon={Icons.edit} text='Repost with your thoughts' ngClass='font-semibold' 
                  extraText='Create new post with johnson post attached ' className='py-2'/>
                </DialogTrigger>
                <DialogContent className='default-scroll overflow-scroll max-h-[90svh]'>
                  <RePost/>
                </DialogContent>
              </Dialog>
              <IconTextButton Icon={Icons.repost} text='Repost' ngClass='font-semibold' 
              extraText='Instantly repost johnson post to your feed ' className='py-2'/>
            </PopoverContent>
           </Popover>
           <Dialog>
              <DialogTrigger asChild>
                <button className='w-4/12 h-10 cursor-pointer hover:bg-accent flex items-center rounded-md justify-center'>
                  <span className='text-main relative right-[2px] text-[22px]'><Icons.messenger/></span>
                  <span className='text-xs font-medium'>Comment</span>
                </button>
              </DialogTrigger>
              <DialogContent className='py-0 pb-4 overflow-auto default-scroll max-h-[96svh] sm:max-h-[90vh]'>
                <PostComment/>
              </DialogContent>
           </Dialog>
          </div>
        </div>
      </div>
      <PostInfo/>
    </Card>
  )
}
