import React from 'react'
import FeedLayout from '@/components/layout/FeedLayout'
import MakePost from '@/components/feed/MakePost'
import BasicPost from '@/components/feed/BasicPost'
import LiamTrigger from '@/components/Liam/LiamTrigger'
import RotateLoader from '@/components/utils/spinners/RotateLoader'
import { getPostsRequest as queryFn } from '@/hooks/requests/endPoints'
import { useGetRequest } from '@/hooks/useRequestProcessor'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { AxiosResponse } from 'axios'
import { IPostsResponse } from '@/store/interfaces'
import { postActions } from '@/store/postSlice'
import SkeletonLoader from '@/components/utils/SkeletonLoader'


export default function FeedMain() {
  const dispatch = useAppDispatch()
  const {page,data,isLast} = useAppSelector((state=>state.post))
  const handleSuccess = (data:AxiosResponse<IPostsResponse>)=>{
    dispatch(postActions.setPosts(data.data?.data))
  }
  const {isLoading,isFetching} = useGetRequest({queryKey:['get-posts',`${page}`],queryFn,onSuccess:handleSuccess})
  return (
    <FeedLayout className=''>
        <MakePost/>
        {data.map((item,key)=>(
            <BasicPost {...item} key={key}/>
        ))}
        {isLoading && <>
          <SkeletonLoader/>
          <SkeletonLoader/>
        </>}  
        <LiamTrigger/>
    </FeedLayout>
  )
}
