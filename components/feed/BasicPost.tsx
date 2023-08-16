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

interface IBasicPost extends IPostDetail{
  isSharing?:boolean
}

export default function BasicPost({type,isSharing=false}:IBasicPost) {

  return (
    <Card className='mt-3 pad relative py-2'>
      {isSharing && <IsShared/>}
        <ProfileInfo/>
      <div className="mt-3 px-1">
        <PostDetail type={type} wordLength={type==="text" || "polls"?20:12}/>
        <div className="mt-1">
          <div className='flex justify-between text-[10px] my-2  sm:text-[11px]'>
            <span>246 reactions</span>
            <span>26 reposts</span>
          </div>
          <PostButtons type={type}>
            <Dialog>
              <DialogTrigger asChild>
              <button className='w-4/12 h-10 cursor-pointer hover:bg-accent flex items-center rounded-md justify-center'>
                <span className='text-main relative right-[2px] text-[22px]'><Icons.messenger/></span>
                <span className='text-xs font-medium'>Comment</span>
              </button>
              </DialogTrigger>
              <DialogContent className='py-0 pb-4 overflow-auto default-scroll max-h-[96svh] sm:max-h-[90vh]'>
              <PostComment/>
            </DialogContent>
            </Dialog>
          </PostButtons>
        </div>
      </div>
      <PostInfo/>
    </Card>
  )
}
