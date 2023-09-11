import React,{useRef} from 'react'
import { Card } from '../ui/card'
import IsShared from './IsShared'
import ProfileInfo from './ProfileInfo'
import { Icons } from '@/utils/icons'
import PostInfo from './PostInfo'
import { IconType } from 'react-icons/lib'
import PostDetail from './PostDetail'
import { Dialog, DialogTrigger,DialogContent } from '../ui/dialog'
import PostComment from './PostComment'
import PostButtons from './PostButtons'
import { IPostDetail } from './PostDetail'
import { IPost } from '@/store/interfaces'



export default function BasicPost(data:IPost) {
  return (
    <Card className='mt-3 pad relative py-2'>
      {data.reposted && <IsShared/>}
        <ProfileInfo {...data.postUser}/>
      <div className="mt-3 px-1">
        <PostDetail url={data.postUrl} type={data.type} wordLength={data.type==="text"?20:12} postText={data.description}/>
        <div className="mt-1">
          <div className='flex justify-between text-[10px] my-2  sm:text-[11px]'>
            <span className='font-semibold'>{data.likes} reactions</span>
            <span>{data.repostCount} reposts</span>
          </div>
          <PostButtons {...data}>
            <Dialog>
              <DialogTrigger asChild>
              <button className='w-4/12 h-10 cursor-pointer hover:bg-accent flex items-center rounded-md justify-center'>
                <span className='text-main relative right-[2px] text-[22px]'><Icons.messenger/></span>
                <span className='text-xs font-medium'>Comment</span>
              </button>
              </DialogTrigger>
              <DialogContent className='py-0 pb-4  overflow-scroll default-scroll h-[94vh] sm:max-h-[90vh]'>
              <PostComment {...data}/>
            </DialogContent>
            </Dialog>
          </PostButtons>
        </div>
      </div>
      <PostInfo/>
    </Card>
  )
}
