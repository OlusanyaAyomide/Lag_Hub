import React from 'react'
import { Popover,PopoverTrigger,PopoverContent } from '../ui/popover'
import { IconType } from 'react-icons/lib'
import { Icons } from '@/utils/icons'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { IconTextButton as PostOptions } from '../utils/IconTextButton'

export default function PostInfo() {

  return (
    <Popover>
      <PopoverTrigger  asChild className='absolute text-xl cursor-pointer right-3 top-1'>
        <Button size={'icon'} variant={"ghost"}>
          <Icons.threedots/>
        </Button>

      </PopoverTrigger> 
      <PopoverContent className='py-4 relative right-2 px-0 lg:right-8 xl:right-[110px]'>
        <PostOptions Icon={Icons.bookmark} text='Save post' className='border-b pb-3'/>
        <PostOptions Icon={Icons.notification} text='Turn on notification for this post'/>
        <PostOptions Icon={Icons.link} text='Copy link for this post'/>
        <PostOptions Icon={Icons.profile} text='View Johnson profile'/>
        <PostOptions Icon={Icons.unfollow} text='Unfollow Johnson '/>
      </PopoverContent> 
  </Popover>
  )
}
