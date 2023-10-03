import LandingMain from '@/components/landing/LandingMain'
import Loader from '@/components/utils/Loader'
import { useAppSelector } from '@/hooks/reduxHooks'
import { useAuth } from '@/hooks/useAuth'
import React from 'react'

export default function LandingPage() {
  useAuth()
  const {authStatus} =useAppSelector((state=>state.layout))
  return (
    <>
      {authStatus === "unauthenticated"?<LandingMain/>:<Loader/>}
    </>

  )
}
