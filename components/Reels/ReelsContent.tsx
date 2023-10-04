import React from 'react'
import ReelsDetail from './ReelsDetail'
import Link from 'next/link'
import { Icons } from '@/utils/icons'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import { getReels } from '@/hooks/requests/endPoints'
import RotateLoader from '@/components/utils/spinners/RotateLoader'
import { useGetRequest } from '@/hooks/useRequestProcessor'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { AxiosResponse } from 'axios'
import { ITikTokResponse } from '@/store/interfaces'
import { tiktokActions } from '@/store/tiktokSlice'
import ReelsSkeleton from './ReelsSkeleton'


export default function ReelsContent() {
  const {hasMore,cursor,videos} =useAppSelector((state=>state.tiktok))
  const dispatch = useAppDispatch()

  const {isLoading,isFetching,isError} = useGetRequest({queryKey:['get-reels',`${cursor}`],queryFn:()=>{return getReels(cursor)},onSuccess:
    (res:AxiosResponse<ITikTokResponse>)=>{
      dispatch(tiktokActions.setTiktokVideos(res.data.data))
  }})

  const [ref] = useInfiniteScroll({
    onLoadMore:()=>{dispatch(tiktokActions.increasePage())},
    loading:isFetching,
    hasNextPage:hasMore,
    disabled:isError
  })

  return (
    <div className='pb-4 pt-2'>
        <Link href={"/home"} className='fixed z-40 max-md:top-1 left-2 md:hidden'>
            <button className=' px-1 py-[2px] rounded-md'>
                <Icons.longback className='text-3xl sm:text-foreground text-white '/>
            </button>
        </Link>

      {videos.map((item,key)=>(
        <ReelsDetail {...item} key={key}/>
      ))}
      {isLoading && videos.length === 0 && <>
        <ReelsSkeleton/>
        <ReelsSkeleton/>
      </>}  
      {!isLoading  && hasMore && <div className='relative bottom-[600px]' ref={ref}>
          <div className="relative top-[600px]">
            <RotateLoader/>
          </div>
       </div>}
    </div>
  )
}
