import React, { useRef, useState } from 'react'
import ProfileInfo from './ProfileInfo'
import PostDetail from './PostDetail'
import Link from 'next/link'
import SingleComment from './SingleComment'
import { IPost } from '@/store/interfaces'
import { useGetRequest } from '@/hooks/useRequestProcessor'
import { postInfoRequest} from '@/hooks/requests/endPoints'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { AxiosResponse } from 'axios'
import { IPostInfo } from '@/utils/responeInterface'
import { postActions } from '@/store/postSlice'
import MessageSkeleton from '../utils/MessageSkeleton'
import ZeroMessages from '../utils/ZeroMessages'
import PostTextInput from '../detail/PostTextInput'
import { Imessageinfo } from '@/utils/interfaces'

export default function PostComment(data:IPost){
  const [messageInfo,setMessageInfo] = useState<Imessageinfo | null>(null)
  const replyRef = useRef<HTMLTextAreaElement>(null)
  const dispatch = useAppDispatch()
  const {currentMessages:messages} = useAppSelector((state=>state.post))
  
  const {isLoading,isFetching} = useGetRequest(
    {queryKey:['detail',data.customId],
    queryFn:()=>{return postInfoRequest(data.customId)},
    onSuccess:(res:AxiosResponse<IPostInfo>)=>{
      dispatch(postActions.setCurrentMessages(res.data.data?.messages))
    }
  },)

  return (
    <div>
      <div className="text-center mt-2 border-b py-2 font-semibold text-lg">
         <span>{data.postUser.username}&apos;s Post</span> 
      </div>
      <div className="mt-3">
        <ProfileInfo post = {data} createdAt={data.createdAt}/>
        <div className="mt-3">
          <PostDetail url={data.postUrl} type={data.type} wordLength={data.type==="text"?20:12} postText={data.description}/>
          <div className="flex justify-between">
          <span className='font-medium'>{data.likes} reactions</span>
          {messages && <span className="block ml-auto font-medium">{messages.length} Comments</span>}
          </div>
          <div className="mt-3 border-t">
            <PostTextInput 
              replyRef={replyRef} 
              messageInfo={messageInfo}
              setMessageInfo={setMessageInfo}
              isVisible={true}
              post={data}
              isDetailed={false}    
              />
              <div className="mt-3 min-h-[200px] transition-all duration-200">
                {messages?.map((item,key)=>(
                  <div key={key}>
                    {key < 4 && <SingleComment message={item} setMessageInfo={setMessageInfo}
                       replyRef={replyRef} key={key}
                      isDetailed={false}/>}
                  </div>
                ))}
                {(isLoading || isFetching) && <>
                    <MessageSkeleton/>
                    <MessageSkeleton/>
                </>}
                {messages && <>
                  {(!(isLoading || isFetching)) && messages.length ===0 && <ZeroMessages/>}
                </>}
                <Link href={`/post/detail/${data.customId}`}>
                {messages && messages.length > 4 && <h1 className='block text-center pl-12 sm:pl-16'>View all comments</h1>}
                </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
