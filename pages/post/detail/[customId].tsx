import FeedLayout from '@/components/layout/FeedLayout'
import React from 'react'
import { useAppSelector } from "@/hooks/reduxHooks"
import { useAuth } from "@/hooks/useAuth"
import PostDetail from '@/components/detail/PostDetail'
import Loader from '@/components/utils/Loader'

export default function Detail() {
  const {isAuthenticated} = useAppSelector((state=>state.user))
  useAuth()
  return (
    <>
      {isAuthenticated?
            <FeedLayout>
              <PostDetail/>
            </FeedLayout>
      :<Loader/>}
    </>

  )
}
