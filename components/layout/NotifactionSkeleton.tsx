import { useTheme } from 'next-themes'
import React from 'react'
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function NotificationSkeleton({isCommunity}:{isCommunity?:boolean}) {
  const {theme} = useTheme()
  const isLight =theme === "light"
  return (
    <div className='w-full mt-2 mb-1'>
      <SkeletonTheme baseColor={isLight?"#ebebeb":"#222222"} highlightColor={isLight?"#f5f5f5":"#525252"}>
        <div className="w-full h-12  overflow-hidden rounded-md">
            <Skeleton  className='h-32 w-full relative bottom-1'/>
        </div>
        {/* <p><Skeleton count={2}/></p> */}
      </SkeletonTheme>

    </div>
  )
}



