import React from 'react'
import { Card } from '../ui/card'
import ProfileInfo from '../feed/ProfileInfo'
import VideoPlayer from '../feed/VideoPlayer'
import PostButtons, { Buttons } from '../feed/PostButtons'
import { Icons } from '@/utils/icons'
import PostInfo from '../feed/PostInfo'
import Link from 'next/link'
import { IYouTubeResponse } from '@/utils/interfaces'

export default function VideoList({kind,items,pageInfo}:IYouTubeResponse) {
  return (
    <div className='pt-3'>
      {items.map((item,key)=>(
        <Card key={key} className='pad py-2 mt-3 relative'>
          <ProfileInfo followers='22M' isVideo
            firstName={item.snippet?.channelTitle} 
            description={item.snippet?.description}/>
            <div className='mt-3'>
              <VideoPlayer url={`https://m.youtube.com/watch?v=${item.id?.videoId}`}/>
            </div>
            <PostButtons type='video' isVideo={true}>
              <Link href={"/video/detail/123"} className='w-6/12'><Buttons text='Details' ngClass='w-full' Icon={Icons.full}/></Link>
            </PostButtons>
            <PostInfo isVideo={true}/>
        </Card>
      ))}
    </div>
  )
}
