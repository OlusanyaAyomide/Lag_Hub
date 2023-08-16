import React, { useState } from 'react'
import { Card } from '../ui/card'
import ProfileInfo from '../feed/ProfileInfo'
import PostButtons from '../feed/PostButtons'
import { Icons } from '@/utils/icons'
import PostDetail from '../feed/PostDetail'
import UserAvatar from '../utils/UserAvatar'
import ResizableText from '../utils/ResizableText'
import { mockComments } from '@/utils/constants'
import SingleComment from '../feed/SingleComment'


export default function PostInformation({type}:{type:"image" | "polls" | "text"}) {
  const [isCommenting,setIsCommenting] = useState(true)
  return (
    <Card className='mt-3 pad relative py-2'>
      <ProfileInfo/>
      <div className='mt-3 px-1'>
        <PostDetail type='image'/>
        <div className="mt-1">
        <div className='flex justify-between text-[10px] my-2  sm:text-[11px]'>
          <span>246 reactions</span>
          <span>26 reposts </span>
        </div>
        <PostButtons type={type}>
          <button onClick={()=>{setIsCommenting((prev=>!prev))}}
           className='w-4/12 h-10 cursor-pointer hover:bg-accent flex items-center rounded-md justify-center'>
            <span className='text-main relative right-[2px] text-[22px]'><Icons.messenger/></span>
            <span className='text-xs font-medium'>Comment</span>
          </button>
        </PostButtons>
        {isCommenting  && <div className='flex'>
          <UserAvatar className='mr-2 mt-2'/>
          <ResizableText placeholder='Comment on johnsons post' className='focus-visible:ring-1 py-1 mb-1 rounded-md ring-border'/>
        </div>}
        <div className="mt-3">
          <span className="text-[11px] tinytext">7 comments</span>
          <div className="mt-1">
            {mockComments.map((item,key)=>(
              <SingleComment key={key} {...item} isDetailed={true}/>
            ))}
          </div>
        </div>
        </div>
      </div>
    </Card>
  )
}
