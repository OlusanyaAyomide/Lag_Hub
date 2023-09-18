import { useTheme } from 'next-themes'
import React from 'react'
import { Comment } from 'react-loader-spinner'
import { Icons } from '@/utils/icons'

export default function ChatLoader() {
    const {theme} = useTheme()
    const isDark = theme === "dark"
  return (
    <div className="flex items-center justify-center h-[80vh] bg-opacity-80">
      <div>
          <h1 className="flex-center mb-2 animate-pulse">
          <Icons.chat3 className='text-[80px]  opacity-50 text-shade mb-2 mr-3'/>
          </h1>
          <div className='rounded-md -mt-2 overflow-hidden w-[100px] '>
              <div className="animate-loader h-[2px] opacity-50  rounded-md bg-shade w-[50px] mx-auto"></div>
            </div>
          <h1 className="text-center text-shade mt-2 animate-pulse">Fetching chats</h1>
        </div>

    </div>

  )
}
