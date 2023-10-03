import React from 'react'
import { Icons } from '@/utils/icons'
import { ThreeDots } from 'react-loader-spinner'
import { useTheme } from 'next-themes'



export default function TypingLoader() {
    const {theme}= useTheme()

  const isBot = true
  return (
    <div className={`rounded-md pad w-fit max-w-[80%] mb-4 ${isBot?" flex":"ml-auto"}  min-w-[100px]`}>
        {isBot && <div className=' w-10 mr-1 ml-2'>
          <Icons.robot className='text-3xl text-main'/>  
        </div>}
        <div className={`py-1 pad flex-center ${!isBot?"bg-main  rounded-sm text-white":"bg-background shadow-sm rounded-md"} `}>
        <span className='mr-2 animate-pulse'>Generating</span>
        <ThreeDots 
            height="25" 
            width="25" 
            radius="10"
            color={theme==="dark"?"white":"#474C57"} 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}/>
        </div>

    </div>
  )
}
