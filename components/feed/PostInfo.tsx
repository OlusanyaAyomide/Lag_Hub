import React from 'react'
import { Popover,PopoverTrigger,PopoverContent } from '../ui/popover'
import { Icons } from '@/utils/icons'
import { Button } from '../ui/button'
import { IconTextButton as PostOptions } from '../utils/IconTextButton'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import Link from 'next/link'
import { IPost } from '@/store/interfaces'
import { useCustomToast } from '../utils/useCustomToast'

export default function PostInfo(post:IPost) {
  const toast = useCustomToast()
  return (
    <Popover>
      <PopoverTrigger  asChild className='absolute text-xl cursor-pointer right-3 top-1'>
        <Button size={'icon'} className='h-6' variant={"ghost"}>
          <Icons.threedots/>
        </Button>
      </PopoverTrigger> 
      <PopoverContent className='py-4 relative right-2 px-0 lg:right-8 xl:right-[110px]'>

        <Link href={`/post/detail/${post.customId}`} className='text-foreground hover:no-underline'>
          <PostOptions Icon={Icons.detail} text='View post' className='border-b pb-3'/>
        </Link>

        <CopyToClipboard text={`${window?.location.origin}/post/detail/${post.customId}`}
          onCopy={()=>{toast("good","post link has been copied")}}>
            <PostOptions Icon={Icons.copy} text='Copy link for this post'/>
        </CopyToClipboard>
        
        <Link href={`/profile/${post.postUser.username}`} className='text-foreground hover:no-underline'>
          <PostOptions Icon={Icons.profile} text={`View ${post.postUser.username} profile`}/>
        </Link>

        <Link href={`/chats/${post.postUser.username}`} className='text-foreground hover:no-underline'>
          <PostOptions Icon={Icons.messenger} text={`message ${post.postUser.username}`}/>
        </Link>
        
     

      </PopoverContent> 
  </Popover>
  )
}
