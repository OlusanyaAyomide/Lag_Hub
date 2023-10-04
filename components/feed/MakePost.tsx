import React,{useRef, useState} from 'react'
import { Card } from '@/components/ui/card'
import { Separator } from '../ui/separator'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Dialog, DialogTrigger,DialogContent } from '../ui/dialog'
import CollectivePost from './CollectivePost'
import UserAvatar from '../utils/UserAvatar'
import Uploader from '../utils/Uploader'
import TextareaAutosize from 'react-textarea-autosize';
import { Icons } from '@/utils/icons'
import VideoPlayer from './VideoPlayer'
import { useCustomToast } from '../utils/useCustomToast'
import { isFileLarge } from '../utils/fileUtil'
import { usePostRequest } from '@/hooks/useRequestProcessor'
import { IResponse, cloudinaryUploader } from '@/utils/cloudinaryUpload'
import { makePostrequest as mutationFn} from '@/hooks/requests/endPoints'
import { DialogClose } from '@radix-ui/react-dialog'
import { AxiosResponse } from 'axios'

import DotLoader from '../utils/spinners/DotLoader'
import { imgUrl, vidURl } from '@/utils/tempKeys'
import { ISinglePostResponse } from '@/utils/responeInterface'
import { useAppDispatch } from '@/hooks/reduxHooks'
import { postActions } from '@/store/postSlice'
import socket from '@/sockets/sockets'

export interface IFile{
   file:File,
   type:"image"|"video",
   url:string
}


export default function MakePost() {
   const ref = useRef<HTMLButtonElement>(null)
   const closeref = useRef<HTMLButtonElement>(null)
   const videoref = useRef<HTMLInputElement>(null)
   const [file,setFile] = useState<IFile | null>(null)
   const toaster = useCustomToast()
   const [text,setText] = useState("")
   const imageref = useRef<HTMLInputElement>(null)
   const isVideo = file?.type === "video"
   const dispatch = useAppDispatch()

   const {mutate:upload,isLoading} = usePostRequest({mutationFn:cloudinaryUploader,
      onSuccess:({data}:AxiosResponse<IResponse>)=>{
      const cloudURl = file?.type === "image"?imgUrl:vidURl
      mutate({type:file?.type,description:text,postUrl:`${cloudURl}${data.public_id}`,reposted:false})
   }})


   const {mutate,isLoading:loading} = usePostRequest({mutationFn,
      onSuccess:(res:AxiosResponse<ISinglePostResponse>)=>{
      const newpost = res.data.data
      dispatch(postActions.pushnewPost(newpost));
      socket.emit("new-post",newpost)
      closeref.current?.click()
      setFile(null)
      setText("")
      toaster("good","Succesfully posted",4000)
   }})
   
   const handleVideoUpload = (e:React.ChangeEvent<HTMLInputElement>)=>{
      const userfile = e.target.files
      if(!userfile){return}
      const fileUpload = userfile[0]
      const videoMimeTypes = ["video/mp4", "video/webm"]
      
      const isfileLarge = isFileLarge(fileUpload,40)
      if(isfileLarge){
         toaster("bad","File is to large")
         return
      }

      if(videoMimeTypes.includes(fileUpload?.type)){
         URL.revokeObjectURL(file?.url||"")
         const videoUrl =URL.createObjectURL(fileUpload)
         setFile({file:fileUpload,type:"video",url:videoUrl})
      }
   }


   const handleDragDrop = (userfile:File |null)=>{
      if(!userfile){
         return setFile(null)
      }
      const isfileLarge = isFileLarge(userfile,15)
      if(isfileLarge){
         toaster("bad","File is to large")
         return
      }
      URL.revokeObjectURL(file?.url ||"")
      const imgurl = URL.createObjectURL(userfile)
      setFile({file:userfile,type:"image",url:imgurl})
   }


   const handleImageUpload = (e:React.ChangeEvent<HTMLInputElement>)=>{
      
      const userfile = e.target.files
      if(!userfile){return}
      const fileUpload = userfile[0]

      const isfileLarge = isFileLarge(fileUpload,25)
      if(isfileLarge){
         toaster("bad","File is to large")
         return
      }

      URL.revokeObjectURL(file?.url ||"")
      const imgurl = URL.createObjectURL(fileUpload)
      setFile({file:fileUpload,type:"image",url:imgurl})
   }
   const handleUpload=()=>{
      if(!file){
         mutate({type:"text",description:text,reposted:false})
         return
      }
      // console.log(file,file?.type)
      upload({file:file?.file,type:file?.type})
   }
   const Loading = isLoading || loading
  return (
   <Card className='py-4 mt-3 px-2 mx-auto w-full'>
      <div className="flex items-center mb-1">
         <UserAvatar/>
         <Dialog>
            <DialogTrigger asChild>
               <Button ref={ref} className='hidden'>Text</Button>
            </DialogTrigger>
            <DialogContent className='max-sm:px-2 max-h-[92vh] overflow-auto default-scroll'>
               <CollectivePost>
               <TextareaAutosize
                  value={text}
                  onChange={(e)=>{setText(e.target.value)}}
                   autoFocus placeholder='Enter message ' 
                   className='resize-none my-4 mx-1 default-scroll w-full outline-none bg-transparent' 
                   maxRows={7} ></TextareaAutosize>

               {!isVideo && 
                  <Uploader
                  className='aspect-[2/1.3] sm:aspect-[2/1.1]' disabled={Loading}
                  showTrash 
                  file={file}
                  setFile={handleDragDrop}
               />}
               
               {isVideo && 
                  <VideoPlayer className='rounded-md overflow-hidden'
                   url={file.url}
               /> }

               <div className="flex-center mt-3">

                  <Button 
                     disabled={Loading}
                     onClick={()=>{imageref.current?.click()}} 
                     variant={'ghost'} className='rounded-full p-2 mr-4 bg-accent' size={'icon'}>
                     <Icons.picture className='text-2xl text-main'/>                    
                  </Button>

                  <Button 
                     disabled={Loading}
                     onClick={()=>{videoref.current?.click()}} 
                     variant={'ghost'} className='rounded-full p-2 bg-accent' size={'icon'}>
                     <Icons.video className='text-2xl text-main'/>                    
                  </Button>

                  <input disabled={Loading} ref={videoref} onChange={handleVideoUpload} className='hidden' type="file" accept="video/*" />
                  <input disabled={Loading} accept="image/*"  ref={imageref} onChange={handleImageUpload} type="file" className="hidden"/> 
               </div>

               <Button disabled={text.length<4 || Loading} onClick={handleUpload}
               className='bg-main hover:bg-blue-500 text-white mt-8 flex items-center ml-auto h-8 px-6'>
                  {Loading?<DotLoader color='#ffffff'/>:"Post"}
               </Button>
               </CollectivePost>
            <DialogClose ref={closeref} className='hidden'>X</DialogClose>
            </DialogContent>

         </Dialog>

         <Input placeholder='Post on student hub' onClick={()=>{ref.current?.click()}} className='focus-visible:ring-0 grow ml-2'/>
      </div>

      <Separator className='mt-4 mb-2  sm:max-w-[650px] sm:mx-auto'/>

      <div className='flex justify-around items-center'>
            <Button onClick={()=>{ref.current?.click();
               setTimeout(()=>{
                  imageref.current?.click()
               },300)
              }} variant={"ghost"} className='rounded-none flex'>
               <Icons.picture className='text-main text-xl sm:text-2xl'/>
               <span className='pl-[2px] text-xs:sm:text-base sm:ml-2 capitalize'>Photos</span>
            </Button>

            <Button onClick={()=>{ref.current?.click();
               setTimeout(()=>{
                  videoref.current?.click()
               },300)
            }}
             variant={"ghost"} className='rounded-none flex'>
               <Icons.video className='text-main text-xl sm:text-2xl'/>
               <span className='pl-[2px] text-xs:sm:text-base sm:ml-2 capitalize'>Videos</span>
            </Button>
      </div>
  </Card>
  )
}
