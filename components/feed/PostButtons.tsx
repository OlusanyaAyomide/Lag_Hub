import React from 'react'
import { Dialog, DialogTrigger,DialogContent } from '../ui/dialog'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Icons } from '@/utils/icons'
import { IconTextButton } from '../utils/IconTextButton'
import RePost from './RePost'
import { IPost } from '@/store/interfaces'
import { usePostRequest } from '@/hooks/useRequestProcessor'
import { likeRequests as mutationFn } from '@/hooks/requests/endPoints'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { AxiosResponse } from 'axios'
import { ISinglePostResponse } from '@/utils/responeInterface'
import { postActions } from '@/store/postSlice'
import { ReactButtons } from './ReactButtons'
import socket from '@/sockets/sockets'
import { makePostrequest} from '@/hooks/requests/endPoints'
import { useCustomToast } from '@/hooks/useCustomToast'
import DotLoader from '../utils/spinners/DotLoader'



interface IPostButtons extends IPost{
  children:React.ReactNode
}

export default function PostButtons({children,...data}:IPostButtons){
  
  const dispatch = useAppDispatch()
  const toaster = useCustomToast()
  const {username,profileImage,profileTheme} = useAppSelector((state=>state.user.data))
  const {type,description,createdAt,postUrl,_id} = data

  
  const {mutate:repost,isLoading:loading} = usePostRequest({mutationFn:makePostrequest,
    onSuccess:(res:AxiosResponse<ISinglePostResponse>)=>{
    const newpost = res.data.data
    toaster("good","Succesfully reposted",4000)
 }})

   const {isLoading,mutate} = usePostRequest({mutationFn,sucessText:`Post ${data.isliked?"unliked":"liked"} succesfully`,onSuccess:(res:AxiosResponse<ISinglePostResponse>)=>{
      const post = res.data.data
      dispatch(postActions.editPosts({_id:data._id,post}))
      socket.emit("like-post",post)
   }})

   const isVideo = data.type ==="video" 
   return (
    <div className="flex  text-lg py-[2px] border-t">

     <ReactButtons
        onClick={()=>{mutate({post:data._id})}}
        disabled={isLoading}  
        isloading={isLoading}
        text={data.isliked?"liked":"like"} Icon={data.isliked?Icons.unlike:Icons.thunbsup} className={data.isliked?"text-[18px] relative  mr-1":"text-[18px]"}/>

    <Popover>
     <PopoverTrigger  asChild>
       <button 
        disabled={username === data.postUser.username}
         className={` ${!isVideo?"w-4/12":"w-6/12"} h-10 cursor-pointer disabled:hover:bg-background hover:bg-accent flex items-center rounded-md justify-center`}>
            <span className='text-main relative right-[2px] text-[22px]'><Icons.repost/></span>
            <span className='text-xs font-medium'>Repost</span>
       </button>
     </PopoverTrigger>
     <PopoverContent className='py-1 px-0'>
       <Dialog>
         <DialogTrigger asChild>
            <button disabled={username === data.postUser.username || loading}>
              <IconTextButton Icon={Icons.edit} text='Repost with your thoughts' ngClass='font-semibold' 
              extraText='Create new post with johnson post attached ' className='py-2'/>
            </button>
         </DialogTrigger>
         <DialogContent className='default-scroll overflow-scroll max-h-[90vh]'>
           <RePost {...data}/>
         </DialogContent>
       </Dialog>
       <IconTextButton 
          disabled={username === data.postUser.username || loading}
          isloading={loading}
          onClick={()=>{
            repost({type,description,postedAt:createdAt,
            authorId:data.postUser._id,
            repostedId:data.customId,
            postUrl,_id,reposted:`${username} : reposted ${data.postUser.username}'s post`,
            repostedAvatar:profileImage,
            repostedTheme:profileTheme,
            repostedusername:username
          })}}
       Icon={Icons.repost} text='Repost' ngClass='font-semibold' 
       extraText='Instantly repost johnson post to your feed ' className='py-2'/>
     </PopoverContent>
    </Popover>
    {children}
   </div>
  )
}
