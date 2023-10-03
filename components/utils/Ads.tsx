import React from 'react'
interface IAds{
  link:string
  children:React.ReactNode
  header:string
  text:string

}
export default function Ads({children,link,header,text}:IAds) {
  return (
    <div className='w-full mb-6 '>
        <div className='bg-[blue]/10 rounded-lg h-[110px] grid relative place-content-center'>
            {children}
        </div>
        <div className='mx-2 mt-2'>
            <a href={link} target='_blank'><h1 className='font-semibold'>{header}</h1></a>
            <a href={link} target='_blank'><h1 className='text-xs text-shade'>{text}</h1></a>   
        </div>
        
     
    </div>
  )
}
