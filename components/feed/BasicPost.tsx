import React,{useRef} from 'react'
import { Card } from '../ui/card'
import IsShared from './IsShared'
import ProfileInfo from './ProfileInfo'
import { useTrimmedText } from '../hooks/TextHooks'
import { inputText } from '@/utils/constants'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Icons } from '@/utils/icons'
import PostInfo from './PostInfo'
import { Button } from '../ui/button'
import { IconType } from 'react-icons/lib'
import { cn } from '@/lib/utils'
import { IconTextButton } from '../utils/IconTextButton'

interface IButtons{
  Icon:IconType,
  className?:string,
  text:string
  onClick?:()=>void
  ngClass?:string
}

export default function BasicPost() {
  const {isTrimmed,toggleText,text} = useTrimmedText(inputText,12)
  const type = "image"
  const ref = useRef<HTMLButtonElement>(null)
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
        <h1>
          <span>{text}</span>
          <span onClick={toggleText} className='text-main py-4 cursor-pointer ml-2'>{isTrimmed?"show less":"...show more"}</span>
        </h1>
        {type === "image" && <div className="mt-3 aspect-[2/1]">
          <img src="/postimg.jpg" alt="post" className='h-full w-full object-cover'/>
        </div>}
        <div className="mt-1">
          <div className='flex justify-between text-[10px] my-2  sm:text-[11px]'>
            <span>246 reactions</span>
            <span>26 reposts</span>
          </div>
          <div className="flex  text-lg py-[2px] border-t">
           <Buttons text='Like' Icon={Icons.thunbsup} className='text-[18px]'/>
           <Popover>
            <PopoverTrigger  asChild>
              <button className='w-4/12 h-10 hover:bg-accent flex items-center justify-center'>
                <span className='text-main relative right-[2px] text-[22px]'><Icons.repost/></span>
                <span className='text-xs font-medium'>Repost</span>
              </button>
            </PopoverTrigger>
            <PopoverContent className='py-1 px-0'>
              <IconTextButton Icon={Icons.edit} text='Repost with your thoughts' ngClass='font-semibold' 
              extraText='Create new post with johnson post attached ' className='py-2'/>
              <IconTextButton Icon={Icons.repost} text='Repost' ngClass='font-semibold' 
              extraText='Instantly repost johnson post to your feed ' className='py-2'/>
            </PopoverContent>
           </Popover>
           <Buttons text='Comment' Icon={Icons.messenger}/>
          </div>
        </div>
      </div>
      <PostInfo/>

    </Card>
  )
}
