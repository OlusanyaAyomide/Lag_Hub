import { useTheme } from 'next-themes'
import React from 'react'
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonLoader from '../utils/SkeletonLoader'

export default function ProfileSkeleton() {
  const {theme} = useTheme()
  const isLight =theme === "light"
  return (
    <div className='w-full mt-6'>
      <SkeletonTheme baseColor={isLight?"#ebebeb":"#222222"} highlightColor={isLight?"#f5f5f5":"#525252"}>
        <div className="relative h-[150px] sm:h-[200px]">
            <div className="absolute inset-0 overflow-hidden">
                <Skeleton className='w-[300px] h-[300px]'/>
            </div>
            <div className="absolute md:flex top-20 w-full  h-[150px] sm:h-[200px] inset-0 z-30  flex md:pl-24 max-md:flex-wrap items-center justify-center">
            <div className='block shrink-0 h-32 mt-20 relative w-32 mx-auto overflow-hidden sm:h-36 sm:w-36  rounded-full'>
                <Skeleton className='h-[300px] relative bottom-2 w-[300px]'/>
            </div> 
            <p className='w-full md:ml-2 md:mt-20 max-md:text-center'>
                <Skeleton count={1} className='max-md:w-[100px]'/>
            </p>
            </div>
        </div>
        <div className="mt-40 sm:mt-36 md:mt-28">
        <SkeletonLoader/>
        </div>

      </SkeletonTheme>

    </div>
  )
}



