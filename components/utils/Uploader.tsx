import { cn } from '@/lib/utils';
import { Icons } from '@/utils/icons';
import Image from 'next/image';
import React, { useRef, useState } from 'react'
import { FileUploader } from "react-drag-drop-files";
import { IFile } from '../feed/MakePost';

interface IUploader{
  className?:string
  style?:string
  ngClass?:string
  showTrash:boolean
  file:IFile | null
  setFile:(file:File | null)=>void
  disabled:boolean

}
const fileTypes = ["JPG", "PNG", "GIF","AVIF"]
export default function Uploader({className,style,ngClass,showTrash,file,setFile,disabled}:IUploader) {
  
  return (
  <div>
    <FileUploader disabled={disabled} types={fileTypes} maxSize={20} handleChange ={(file:File)=>{setFile(file)}}>
        <div className={cn(` ${file?"":"border-dashed border-2"} relative rounded-md mt-2 cursor-pointer grid place-items-center`,className)}>
          {file && showTrash && <button className='absolute -top-6 right-2' type='button'  onClick={()=>{setFile(null)}}>
              <Icons.trash className='text-xl text-main hover:text-red-500'/>
            </button>}
          {file?.type === "image" && <div className={cn('h-full w-full rounded-md overflow-hidden relative',ngClass)}>
              <Image fill src={file.url} alt='' className='object-cover'/>
            </div>}
          {!file &&  <div>
              <h1 className="text-center">Drag or drop image here</h1>
              <h1 className="text-center">To upload image</h1>
            </div>}
        </div>
    </FileUploader>
  </div>
  )
}
