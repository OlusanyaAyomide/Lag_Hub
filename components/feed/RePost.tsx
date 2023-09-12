import React, { useState } from 'react'
import CollectivePost from './CollectivePost'
import ProfileInfo from './ProfileInfo'
import PostDetail from './PostDetail'
import { Button } from '../ui/button'
import ResizableText from '../utils/ResizableText'
import { IPost } from '@/store/interfaces'
import socket from '@/sockets/sockets'
import { makePostrequest as mutationFn} from '@/hooks/requests/endPoints'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { AxiosResponse } from 'axios'
import { usePostRequest } from '@/hooks/useRequestProcessor'
import { ISinglePostResponse } from '@/utils/responeInterface'
import TextareaAutosize from 'react-textarea-autosize';
import DotLoader from '../utils/spinners/DotLoader'
import { postActions } from '@/store/postSlice'

interface IRepost extends IPost{
  closeref:React.RefObject<HTMLButtonElement>
}
export default function RePost(data:IRepost) {
  const [text,setText] = useState("")
  const {username,profileImage,profileTheme} = useAppSelector((state=>state.user.data))
  const {type,description,createdAt,postUrl,_id} = data

  const {mutate,isLoading} = usePostRequest({mutationFn,sucessText:"Succesfully reposted",
  onSuccess:(res:AxiosResponse<ISinglePostResponse>)=>{
  const newpost = res.data.data
  socket.emit("re-post",newpost)
  data.closeref.current?.click()
  }})

  return (
    <CollectivePost>
      <TextareaAutosize
          value={text}
          onChange={(e)=>{setText(e.target.value)}}
          autoFocus placeholder='Enter message ' 
          className='resize-none my-4 mx-1 w-full outline-none bg-transparent' 
          maxRows={4} ></TextareaAutosize>

      <div className="mt-3 py-3 border rounded-md px-1">
        <ProfileInfo post={data} createdAt={data.createdAt}/>
        <div className="mt-2">
          <PostDetail url={data.postUrl} type={data.type} wordLength={data.type==="text"?20:12} postText={data.description}/>
        </div>
      </div>

      <Button disabled={isLoading || text.length < 4} onClick={()=>{
        mutate({type,description,postedAt:createdAt,
        authorId:data.postUser._id,
        repostedId:data.customId,
        postUrl,_id,reposted:`${username} : ${text}`,
        repostedAvatar:profileImage,
        repostedTheme:profileTheme,
        repostedusername:username
          })}}
      className='mt-6 h-8 flex ml-auto mr-1 items-center justify-center hover:bg-blue-500  px-6 text-white  bg-main'>
          {isLoading?<DotLoader color='#ffffff'/>:"Post"}
      </Button>

    </CollectivePost>
  )
}
