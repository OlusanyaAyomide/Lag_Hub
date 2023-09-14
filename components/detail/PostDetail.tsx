import React, { useRef, useState } from 'react'
import { Icons } from '@/utils/icons'
import SingleComment from '../feed/SingleComment'
import { AxiosResponse } from 'axios'
import { useGetRequest } from '@/hooks/useRequestProcessor'
import { useRouter } from 'next/router'
import { postInfoRequest } from '@/hooks/requests/endPoints'
import { IPostInfo } from '@/utils/responeInterface'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import BasicPost from '../feed/BasicPost'
import { postDetailActions } from '@/store/postDetailSlice'
import SkeletonLoader from '../utils/SkeletonLoader'
import MessageSkeleton from '../utils/MessageSkeleton'
import { Imessageinfo } from '@/utils/interfaces'
import PostTextInput from './PostTextInput'
import ZeroMessages from '../utils/ZeroMessages'


export default function PostMain() {
  const [isCommenting,setIsCommenting] = useState(false)
  const [messageInfo,setMessageInfo] = useState<Imessageinfo | null>(null)
  const router = useRouter()
  const customId = router.query.customId as string
  console.log(customId)
  const {post,messages} = useAppSelector((state=>state.postdetail))
  const dispatch = useAppDispatch()
  const replyRef = useRef<HTMLTextAreaElement>(null)
  
  const {isLoading,isFetching,data} = useGetRequest(
    {queryKey:['detail',customId],
    queryFn:()=>{return postInfoRequest(customId)},
    onSuccess:(res:AxiosResponse<IPostInfo>)=>{
      dispatch(postDetailActions.setSinglePost(res.data.data))
      // dispatch(postActions.setCurrentMessages(res.data.data?.messages))
    }
  },)

  return (
    <div> 
      {data && <BasicPost {...post} isDetailed={true}>
        <button onClick={()=>{
          setIsCommenting((prev=>!prev))}
        }
           className='w-4/12 h-10 cursor-pointer hover:bg-accent flex items-center rounded-md justify-center'>
            <span className='text-main relative right-[2px] text-[22px]'><Icons.messenger/></span>
            <span className='text-xs font-medium'>Comment</span>
          </button>
          <div className="w-full mt-3 text-[13px]">
          <PostTextInput 
              replyRef={replyRef} 
              messageInfo={messageInfo}
              setMessageInfo={setMessageInfo}
              isVisible={isCommenting}
              post={post}
              isDetailed={true}    
              />
              {messages?.map((item,key)=>(
                <SingleComment message={item} setMessageInfo={setMessageInfo}
                setIsCommenting={setIsCommenting}
                   replyRef={replyRef} key={key}
                  isDetailed={false}/>
                ))}
                {messages.length ===0 && <ZeroMessages/>}
          </div>
      </BasicPost>}
      {isLoading && isFetching && <div className='mt-6'>
        <SkeletonLoader/>
        <div className="mt-4">
          <MessageSkeleton/>
          <MessageSkeleton/>
        </div>
      </div>}
    </div>

  )
}
