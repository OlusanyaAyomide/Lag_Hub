import React,{useState} from 'react'
import UserAvatar from '../utils/UserAvatar'
import { AnimatePresence, motion } from 'framer-motion'
import TextareaAutosize from 'react-textarea-autosize';
import { usePostRequest } from '@/hooks/useRequestProcessor';
import { AxiosResponse } from 'axios';
import { createPostReply,createPostMessage } from '@/hooks/requests/endPoints';
import { ISingleMessageResponse } from '@/utils/responeInterface';
import { Imessageinfo } from '@/utils/interfaces';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { postActions } from '@/store/postSlice';
import { postDetailActions } from '@/store/postDetailSlice';
import socket from '@/sockets/sockets';
import { IPost } from '@/store/interfaces';
import { Icons } from '@/utils/icons';
import { commentAnimation } from '@/utils/XAnimation';


interface IPostTextInput{
    replyRef:React.RefObject<HTMLTextAreaElement>
    messageInfo:Imessageinfo | null
    isVisible:boolean
    post:IPost
    setMessageInfo: React.Dispatch<React.SetStateAction<Imessageinfo | null>>
    isDetailed:boolean

}


export default function PostTextInput({replyRef,messageInfo,isVisible,post,setMessageInfo,isDetailed}:IPostTextInput) {
   const [text,setText] = useState("")
   const dispatch = useAppDispatch()
  const {isLoading:loading,mutate} = usePostRequest({mutationFn:messageInfo?createPostReply:createPostMessage,
    sucessText:`${!messageInfo?"Comment has been added":"reply has been added"}`,
      onSuccess:(res:AxiosResponse<ISingleMessageResponse>)=>{
        setText("")
        if(res.data.data?.replies?.length === 0){
          dispatch(postActions.addnewFeedPost(res.data.data))
          if(isDetailed){
            dispatch(postDetailActions.addNewMessage(res.data.data))
          }
          socket.emit("create-post-message",{
            message:res.data.data,
            poster:post.postUser,
            postId:post.customId,
          })
        }else{
          setMessageInfo(null)
          dispatch(postActions.editRepliedMessage(res.data.data))
          if(isDetailed){
            dispatch(postDetailActions.editRepliedMessage(res.data.data))
          }
          socket.emit("create-post-reply",{
            messager:res.data.data.messageUser,
            reply:res.data.data,
            postId:post.customId,
          })
        }
      }
    }
  )
  return (
    <AnimatePresence>
        {isVisible && <motion.div variants={commentAnimation} initial="initial" animate="animate"   className="flex pt-3 pb-1 relative">
            <UserAvatar/>
            <div  className="grow pb-1 relative pl-1 sm:pl-2">
            <TextareaAutosize ref={replyRef}
              value={text}
              autoFocus={isDetailed}
              onChange={(e)=>{setText(e.target.value)}}
              placeholder={`${messageInfo?`reply ${messageInfo.username}`
                  :`Leave a comment`} `} 
              className='resize-none py-2 mb-2 px-2 pr-6 default-scroll mx-1 w-full bg-accent/60 pb-2 outline-none rounded-md' 
              maxRows={4} ></TextareaAutosize>
              <button onClick={()=>{
                  !messageInfo?mutate({post:post._id,text}):mutate({message:messageInfo._id,text})
                }}
              disabled={text.length < 3}
              className={`${loading?"animate-spin h-3 w-3 bottom-7 border-main border-2 border-r-transparent":""} absolute bottom-5 disabled:opacity-50 -right-[2px] p-1 active:bg-accent rounded-full`}>
                {!loading && <Icons.plane className='text-[22px]'/>}
              </button>
            </div>
            {messageInfo && <div className="flex-center absolute bottom-[2px] left-14">
              <span className=' text-main font-medium '>Replying @{messageInfo?.username}</span>
              <button onClick={()=>{setMessageInfo(null)}}
                className="ml-3 hover:text-main text-base"><Icons.cancel/></button>
            </div>} 
        </motion.div>}
    </AnimatePresence>

  )
}
