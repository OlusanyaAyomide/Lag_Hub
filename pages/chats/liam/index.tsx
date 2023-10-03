import MainChat from '@/components/Liam/MainChat'
import CommunityLayout from '@/components/layout/CommunityLayout'
import { useAppSelector } from "@/hooks/reduxHooks"
import { useAuth } from "@/hooks/useAuth"
import Loader from "@/components/utils/Loader"
import React from 'react'

export default function ChatLiam() {
  const {isAuthenticated} = useAppSelector((state=>state.user))
  useAuth()
  return (
    <>
      {isAuthenticated?
      <CommunityLayout>
          <MainChat/>    
      </CommunityLayout> 
      :<Loader/>}
    </>
  )
}


