import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonLoader() {
  return (
    <div className='w-full mt-6'>
      <div className="flex-center">
        <div className='h-12 w-12  overflow-hidden rounded-full'>
          <Skeleton className='h-40 relative bottom-4'/>
        </div>
        <div className="ml-3 grow">
          <p className='w-7/12 overflow-hidden' ><Skeleton  count={2}/></p>
        </div>
      </div>
      <p className='mx-2 mt-1 overflow-hidden'><Skeleton count={2}/></p>
      <div className='h-[220px] mx-2 overflow-hidden rounded-md'>
        <Skeleton className='h-[400px]'/>
      </div>
      <div className="h-16 mt-2 overflow-hidden mx-2 rounded-md">
        <Skeleton className='h-[100px]'/>
      </div>
    </div>
  )
}



