import CommunityMain from '@/components/community/Community'
import CommunityLayout from '@/components/layout/CommunityLayout'
import React from 'react'
import { useAppSelector } from "@/hooks/reduxHooks"
import { useAuth } from "@/hooks/useAuth"

export default function index() {
  const {isAuthenticated} = useAppSelector((state=>state.user))
  useAuth()
  return (
    <CommunityLayout>
        <CommunityMain/>
    </CommunityLayout>
  )
}
