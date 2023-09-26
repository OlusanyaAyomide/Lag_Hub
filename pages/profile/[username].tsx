import React from 'react'
import { useAppSelector } from "@/hooks/reduxHooks"
import { useAuth } from "@/hooks/useAuth"
import Loader from "@/components/utils/Loader"
import ProfileMain from '@/components/profile/ProfileMain'

export default function Profile() {
  const {isAuthenticated} = useAppSelector((state=>state.user))
  useAuth()
  return (
    <>
      {isAuthenticated?<ProfileMain/>:<Loader/>}
    </>


  )
}

