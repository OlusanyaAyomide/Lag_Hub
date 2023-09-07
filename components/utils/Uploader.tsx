import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useRef, useState } from 'react'
import { FileUploader } from "react-drag-drop-files";

interface IUploader{
  className?:string
  style?:string
  ngClass?:string
}
const fileTypes = ["JPG", "PNG", "GIF","MP4"]
export default function Uploader({className,style,ngClass}:IUploader) {
  const [file,setFile] = useState<File | null>(null)
  const ref = useRef<HTMLInputElement>(null)

  const handleFileChange=(file:File)=>{
    console.log("File-change")
    setFile(file)
  }
  const handleUpload = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const file =e.target.files
    if(file){
      setFile(file[0])
    }
  
  }
  return (
  <div>
    <FileUploader types={fileTypes} maxSize={20} handleChange ={handleFileChange}>
        <div onClick={()=>{ref.current?.click()}} className={cn("border-2 rounded-md mt-2 cursor-pointer border-dashed overflow-hidden grid place-items-center",className)}>
          {file && <div className={cn('h-full w-full',ngClass)}>
              <Image fill src={URL.createObjectURL(file)} alt='' className='object-cover'/>
            </div>}
          {!file &&  <div>
              <h1 className="text-center">Click or Drag and drop</h1>
              <h1 className="text-center">To upload image</h1>
            </div>}
            <input accept="image/*, video/*" ref={ref} onChange={handleUpload} type="file" className="hidden"/>
        </div>
    </FileUploader>
  </div>
  )
}
