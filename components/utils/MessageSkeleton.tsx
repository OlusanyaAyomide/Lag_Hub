import { useTheme } from 'next-themes'
import React from 'react'
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function MessageSkeleton() {
  const {theme} = useTheme()
  const isLight =theme === "light"
  return (
    <div className='w-full mt-3'>
      <SkeletonTheme baseColor={isLight?"#ebebeb":"#222222"} highlightColor={isLight?"#f5f5f5":"#525252"}>
        <div className="flex">
          <div className='h-10 w-10  overflow-hidden rounded-full'>
            <Skeleton  className='h-40 relative bottom-4'/>
          </div>
          <div className="ml-3 h-[70px] overflow-hidden rounded-md grow">
            <Skeleton  className='h-[160px] relative bottom-4'/>
          </div>
        </div>
      </SkeletonTheme>

    </div>
  )
}



