import { TempTikTockData } from '@/utils/TempConstants'
import React from 'react'
import ReelsDetail from './ReelsDetail'

export default function ReelsContent() {
  return (
    <div className='mt-4 pb-6'>
      {TempTikTockData.data.map((item,key)=>(
        <ReelsDetail {...item} key={key}/>
      ))}
    </div>

  )
}
