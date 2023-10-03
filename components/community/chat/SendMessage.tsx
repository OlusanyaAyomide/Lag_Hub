import React, { useEffect, useRef, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import { Icons } from '@/utils/icons';
import { Button } from '@/components/ui/button';
import { AnimatePresence } from 'framer-motion';
import {motion} from "framer-motion"
import { chatFIleAnimation } from '@/utils/XAnimation';
import Image from 'next/image';
import { imgUrl } from '@/utils/tempKeys'
import { usePostRequest } from '@/hooks/useRequestProcessor';
import { cloudinaryUploader,IResponse } from '@/utils/cloudinaryUpload';
import { AxiosResponse } from 'axios';
import { isFileLarge } from '@/components/utils/fileUtil';
import { useCustomToast } from '@/hooks/useCustomToast';
import socket from '@/sockets/sockets';

export interface IInputType{
  text:string
  type:"image"|"text"
  imageUrl?:string
}
interface ISendMessage{
  isLiam:boolean
  sendMessage:({text,imageUrl,type}:IInputType)=>void
  isJoined:boolean
  joinCommunity?:()=>void
  disabled?:boolean
  focusChange:(status:boolean)=>void
}

export default function SendMessage({isLiam,sendMessage,disabled=false,isJoined,joinCommunity,focusChange}:ISendMessage) {
    const [text,setText] = useState<string>("")
    const [file,setFile] = useState<File | null>(null)
    const [filePreview,setFilePreview] = useState<string>("")
    const ref = useRef<HTMLInputElement>(null)
    const toaster = useCustomToast()

    const cleanUp =()=>{
        URL.revokeObjectURL(filePreview)
        setText("");setFile(null)
        if(ref.current){ref.current.value = ""}
    }

    const {isLoading,mutate} = usePostRequest({mutationFn:cloudinaryUploader,
        onSuccess:({data:{public_id}}:AxiosResponse<IResponse>)=>{
        cleanUp()
        sendMessage({text,type:"image",imageUrl:`${imgUrl}${public_id}`})
    }})
    const handleSubmit =()=>{
        if(file){
            mutate({file,type:"image"})
            return
        }
        cleanUp()
        console.log("here")
        sendMessage({type:"text",text})
    }
    const handlePreview=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const files = e.target.files
        
        if (files){
            const file = files[0]
            const isfileLarge = isFileLarge(file,25)
            if(isfileLarge){
                toaster("bad","File is to large")
            }
            if(file){
                URL.revokeObjectURL(filePreview)   
                setFile(file)
                const previewUrl = URL.createObjectURL(file)
                setFilePreview(previewUrl)
            }
            
        }
    }
    useEffect(()=>{return()=>{
        URL.revokeObjectURL(filePreview)
    }},[])
    return (
    <div className="fixed bottom-0 border-t transition-all duration-1000 overflow-hidden shadow-sm pb-2 w-full md:max-w-[64%] xl:max-w-[48%] max-md:left-0 z-10 px-3 bg-background xl:-translate-x-4 md:-translate-x-2 lg:-translate-x-8">
        <AnimatePresence>
            {file && <motion.div variants={chatFIleAnimation} initial="initial" animate="animate" exit="exit" 
             className='w-full mt-1 rounded-md overflow-hidden h-[230px] flex flex-col items-end'>
              <button className='block ml-auto' onClick={()=>{
                setFile(null)
                if(ref.current){ref.current.value = ""}
                URL.revokeObjectURL(filePreview)
              }}>
                <Icons.cancel className='text-shade hover:text-foreground hover:scale-110 text-xl mb-1'/>
              </button>
              <div className='h-full relative w-full overflow-hidden flex justify-center'>
                <Image fill src={filePreview} alt='chat-message' className='object-contain'/>
              </div>
            </motion.div> }   
        </AnimatePresence>
        {isJoined &&
         <div className='flex items-end'>
            {/* text.length>2 && !isLiam &&   */}
            <div className="relative w-full">
                <TextareaAutosize 
                    onFocus={()=>{focusChange(true)}}
                    onBlur={()=>{focusChange(false)}}
                    value={text}
                    disabled={disabled}
                    onChange={(e)=>{setText(e.target.value)}}
                    placeholder='Enter message'
                    className='w-full default-scroll mt-1 mb-[2px] rounded-lg grow outline-none peer bg-accent py-2 px-2 focus:pr-4 resize-none relative shadow-2xl'
                     maxRows={4}>
                </TextareaAutosize>
                {!isLiam && <button onClick={()=>{ref.current?.click()}} className='text-xl absolute right-2  bottom-3 ml-1 '>
                    <Icons.image/>
                </button>}
            </div>
            
            <input className='hidden'  ref={ref} type="file" accept="image/*" onChange={handlePreview} />
            {text !=="" && <button onClick={handleSubmit}
             disabled={isLoading || disabled} className={`text-xl ${isLoading?"animate-spin border-2 border-main border-b-transparent rounded-full  h-3 w-3 mb-4 ":"rotate-[10deg]"}  ml-1 mb-3 text-main`}>
               {isLoading?"":<Icons.plane/>}
            </button>}
        </div>}

        {!isJoined && 
        <div className='lg:max-w-[620px] md:max-w-[520px] w-full mb-[2px]'>
            <div className=''>
                <h1 className="tinytext block text-center">You are not yet a member of this community</h1>
            <Button onClick={joinCommunity}
            className='mt-2 h-7 flex px-6 items-center  bg-main mx-auto hover:bg-blue-500'>Join</Button>
            </div>
        </div>
    }
</div>
  )
}

