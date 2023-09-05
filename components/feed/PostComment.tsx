import React from 'react'
import ProfileInfo from './ProfileInfo'
import PostDetail from './PostDetail'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { mockComments } from '@/utils/constants'
import { Icons } from '@/utils/icons'
import ResizableText from '../utils/ResizableText'
import Link from 'next/link'
import SingleComment from './SingleComment'

export default function PostComment() {

  return (
    <div>
      <div className="text-center mt-2 border-b py-2 font-semibold text-lg">
        Johnson&apos;s Post
      </div>
      <div className="mt-3">
        <ProfileInfo/>
        <div className="mt-3">
          <PostDetail type='image'/>
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
                <div key={key}>
                  {key < 3 && <SingleComment key={key} {...item} isDetailed={false}/>}
                </div>
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
