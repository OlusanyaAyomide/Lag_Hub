import React, { useRef, useState } from 'react'
import { Card } from '@/components/ui/card'
import ProfileInfo from '@/components/feed/ProfileInfo'
import VideoPlayer from '@/components/feed/VideoPlayer'
import PostInfo from '@/components/feed/PostInfo'
import { mockData } from '@/utils/constants'
import SingleComment from '@/components/feed/SingleComment'
import YouTubeRepost from './YouTubeRepost'
import useInfiniteScroll from 'react-infinite-scroll-hook'

export default function YouTubeDetail() {
    const [viewed,setViewed] = useState(5)
    const mockComment = mockData()
    const [ref] = useInfiniteScroll({
        onLoadMore:()=>{setViewed((prev=>prev+4))},
        loading:false,
        hasNextPage:viewed < mockComment.length,
        rootMargin: '0px 0px 100px 0px'
    })

  return (
    <Card className='pad py-2 mt-3 relative'>
        <ProfileInfo followers='22M' isVideo/>
        <h1 className='sm:pl-[52px] my-1 font-medium'>Video Title for testing and debugging purposes and all activities involved</h1>
        <div className='mt-3'>
            <VideoPlayer url={`https://www.youtube.com/watch?v=6ydFDwv-n8w`}/>
        </div>
        <div className="mt-2">
            <span className='tinytext block mb-3'>comments {`(33)`}</span>
        {mockComment.map((item,key)=>(
            <div key={key}>
            {key < viewed &&<SingleComment {...item} isDetailed/>}
            {viewed < mockComment.length && 
                <span className='opacity-0' ref={ref}></span>
            }
            </div>
        ))} 
        </div>
        <YouTubeRepost/>
        <PostInfo isVideo/>
    </Card>
  )
}
