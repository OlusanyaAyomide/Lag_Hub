import React from 'react'
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import { useTheme } from 'next-themes'
import 'react-loading-skeleton/dist/skeleton.css'

export default function ReelsSkeleton() {
    const {theme} = useTheme()
    const isLight =theme === "light"
  return (
    <SkeletonTheme baseColor={isLight?"#ebebeb":"#222222"} highlightColor={isLight?"#f5f5f5":"#525252"}>
    <div className='tiktok-div overflow-hidden mb-4'>
          <div className="flex-center">
            <div className='h-10 w-10  overflow-hidden rounded-full'>
              <Skeleton  className='h-40 relative bottom-4'/>
            </div>
            <div className="ml-3 grow">
               <p className='w-7/12 overflow-hidden py-4' ><Skeleton  count={1}/></p>
            </div>
          </div>
          <div className="h-full overlow-hidden">
            <Skeleton className='h-full'/>
          </div>
    </div>
    </SkeletonTheme>
  )
}
