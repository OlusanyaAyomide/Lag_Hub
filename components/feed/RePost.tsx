import React from 'react'
import CollectivePost from './CollectivePost'
import ProfileInfo from './ProfileInfo'
import PostDetail from './PostDetail'
import { Button } from '../ui/button'
import ResizableText from '../utils/ResizableText'
import { IPostDetail } from './PostDetail'

export default function RePost(props:IPostDetail) {
  return (
    <CollectivePost>
      <ResizableText placeholder='share your thoughts on this post'/>
      <div className="mt-3 pt-3 border rounded-md px-1">
        <ProfileInfo/>
        <div className="mt-2">
          <PostDetail {...props}/>
        </div>
      </div>
      <Button className='mt-6 h-8 flex ml-auto mr-1 items-center dark:hover:text-black px-6 text-white  bg-main'>
        Post
      </Button>
    </CollectivePost>
  )
}
