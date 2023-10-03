import { Button } from '@/components/ui/button'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { Icons } from '@/utils/icons'
import { IconTextButton } from '@/components/utils/IconTextButton'
import React from 'react'
import { Dialog, DialogContent,DialogTrigger } from '@/components/ui/dialog'
import RePost from '@/components/feed/RePost'

export default function YouTubeRepost() {
  return (
    <Popover>
      {/* <PopoverTrigger asChild>
        <Button variant={"ghost"} size={"icon"} className='absolute text-xl cursor-pointer  right-10 top-1 '>
          <Icons.repost/>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='py-4  relative right-2 px-0 lg:right-8 xl:right-[110px]'>
      <Dialog>
        <DialogTrigger asChild>
          <IconTextButton Icon={Icons.edit} text='Repost with your thoughts' ngClass='font-semibold' 
         extraText='Create new post with johnson post attached ' className='py-2'/>
        </DialogTrigger>
        <DialogContent>
          <RePost type='video'/>
        </DialogContent>
      </Dialog>
        <IconTextButton Icon={Icons.repost} text='Repost' ngClass='font-semibold' 
       extraText='Instantly repost johnson post to your feed ' className='py-2'/>
      </PopoverContent> */}
  
    </Popover>
  )
}
