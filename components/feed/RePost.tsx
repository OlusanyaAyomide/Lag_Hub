import React from 'react'
import CollectivePost from './CollectivePost'
import ProfileInfo from './ProfileInfo'
import PostDetail from './PostDetail'
import { Button } from '../ui/button'
import ResizableText from '../utils/ResizableText'
import { IPost } from '@/store/interfaces'

export default function RePost(data:IPost) {
  return (
    <CollectivePost>
      <ResizableText placeholder='share your thoughts on this post'/>
      <div className="mt-3 pt-3 border rounded-md px-1">
        <ProfileInfo post={data} createdAt={data.createdAt}/>
        <div className="mt-2">
          <PostDetail url={data.postUrl} type={data.type} wordLength={data.type==="text"?20:12} postText={data.description}/>
        </div>
      </div>
      <Button className='mt-6 h-8 flex ml-auto mr-1 items-center dark:hover:text-black px-6 text-white  bg-main'>
        Post
      </Button>
    </CollectivePost>
  )
}
