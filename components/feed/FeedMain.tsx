import React from 'react'
import FeedLayout from '@/components/layout/FeedLayout'
import MakePost from '@/components/feed/MakePost'
import BasicPost from '@/components/feed/BasicPost'
import LiamTrigger from '@/components/Liam/LiamTrigger'
import RotateLoader from '@/components/utils/spinners/RotateLoader'
import { getPostsRequest } from '@/hooks/requests/endPoints'
import { useGetRequest } from '@/hooks/useRequestProcessor'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { AxiosResponse } from 'axios'
import { IPostsResponse } from '@/store/interfaces'
import { postActions } from '@/store/postSlice'
import SkeletonLoader from '@/components/utils/SkeletonLoader'
import useInfiniteScroll from 'react-infinite-scroll-hook'

export default function FeedMain() {
  const dispatch = useAppDispatch()
  const {page,data,isLast} = useAppSelector((state=>state.post))

  const handleSuccess = (data:AxiosResponse<IPostsResponse>)=>{
    dispatch(postActions.setPosts(data.data?.data))
  }

  const {isLoading,isFetching,isError} = useGetRequest({queryKey:['get-posts',`${page}`],queryFn:()=>{return getPostsRequest(page)},onSuccess:handleSuccess})

  const [ref] = useInfiniteScroll({
    onLoadMore:()=>{dispatch(postActions.increasePage())},
    loading:isFetching,
    hasNextPage:!isLast,
    disabled:isError
  })


  return (
    <FeedLayout>
        <MakePost/>
        {data.map((item,key)=>(
            <BasicPost {...item} key={key}/>
        ))}
        {isLoading && data.length === 0 && <>
          <SkeletonLoader/>
          <SkeletonLoader/>
        </>}  
        {!isLoading && !isLast && <div className='relative bottom-[600px]' ref={ref}>
          <div className="relative top-[600px]">
            <RotateLoader/>
          </div>
       </div>}
        <LiamTrigger/>
    </FeedLayout>
  )
}
