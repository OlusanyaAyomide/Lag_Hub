import React from 'react'
import ProfileInfo from './ProfileInfo'
import PostDetail from './PostDetail'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { mockComments } from '@/utils/constants'
import { Icons } from '@/utils/icons'
import ResizableText from '../utils/ResizableText'
import Link from 'next/link'

export default function PostComment() {
  return (
    <div>
      <div className="text-center mt-2 border-b py-2 font-semibold text-lg">
        Johnson's Post
      </div>
      <div className="mt-3">
        <ProfileInfo/>
        <div className="mt-3">
          <PostDetail/>
          <div className="flex justify-between">
          <span>41 reactions</span>
          <span className="block ml-auto">33 Comments</span>
          </div>
     
          <div className="mt-3 border-t">
            <div className="flex">
              <Avatar className='h-7 w-7 mt-4'>
                <AvatarFallback>Lh</AvatarFallback>
                <AvatarImage src='/profile.png'/>
              </Avatar>
              <div className="grow relative pl-1 sm:pl-2">
                <ResizableText placeholder='Comment on  johnson post' className='bg-accent/60 pt-2 pb-3 rounded-md'/>
                <button className='absolute bottom-1 right-1 p-1 active:bg-accent rounded-full'>
                  <Icons.plane className='text-[22px]'/>
                </button>
              </div>
            </div>
            <div className="mt-4">
              {mockComments.map((item,key)=>(
                <>
                  {key < 3 && <div className='mb-3'>
                  <div key={key} className='flex flex-wrap'>
                    <div className="flex w-full">
                    <Avatar>
                      <AvatarImage src='/profile.png'/>
                      <AvatarFallback>Lh</AvatarFallback>
                    </Avatar>
                    <div className='grow pl-1 sm:pl-2'>
                      <div className="rounded-md bg-accent/50 py-3 pad">{item.comment}</div>
                      <div className="w-full  mt-1 mb-3 flex-center pad">
                        <button className='text-main  mr-3 flex-center'><Icons.thunbsup/><span className='ml-[2px]'>4</span></button>
                        <button className='text-main  mr-3 flex-center'><Icons.comment/><span className='ml-[2px]'>2</span></button>
                        <span>21 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                {item.reply.length > 0 && item.reply.map((items,keys)=>(
                <>
                  {keys < 2 && <div key={keys} className='w-full pl-4 mb-2 mt-1 flex  sm:pl-8'>
                  <Avatar className='w-6 h-6'>
                    <AvatarFallback>Lh</AvatarFallback>
                    <AvatarImage src='/profile.png'/>
                  </Avatar>
                  <div className='ml-1 sm:ml-2 bg-accent/50 rounded-md pad py-1'>{items?.comment}</div>
                  </div>}
                </>
                ))}
                {item.reply.length > 2 &&
                <Link href={""}><h1 className='block mt-1 pl-12 sm:pl-16'>view all {item.reply.length} reply</h1></Link>
                }
                </div>}
                </>
              ))}
              <Link href={"/"}>
              <h1 className='block text-center pl-12 sm:pl-16'>View all comments</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
