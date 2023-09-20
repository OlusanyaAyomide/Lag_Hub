import { useTheme } from 'next-themes'
import React from 'react'
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useHydration } from '@/hooks/useHydration'

export default function DmListSkeleton() {
    const array =[1,2,3,4,5]
  const {theme} = useTheme()
  const isLight =theme === "light"
  const {isRendered} = useHydration()
  return (
    <>
    {array.map((item,key)=>(
         <div className='w-full mt-2 mb-1 px-2' key={key}>
         {isRendered && <SkeletonTheme baseColor={isLight?"#ebebeb":"#222222"} highlightColor={isLight?"#f5f5f5":"#525252"}>
           <div className="flex-center">
             <div className='h-10 w-10  overflow-hidden rounded-full'>
               <Skeleton  className='h-40 relative bottom-4'/>
             </div>
             <div className='grow'>
               <div className={`ml-3 h-[16px] overflow-hidden rounded-md grow`}>
                 <Skeleton  className='h-[160px] relative bottom-4'/>
               </div>
               <div className={`ml-3 mt-[2px] h-[8px] overflow-hidden rounded-md grow`}>
                 <Skeleton  className='h-[160px] relative bottom-4'/>
               </div>
             </div>
   
           </div>
         </SkeletonTheme>}
   
       </div>
    ))}
    </>

  )
}



