import CommunityMain from '@/components/community/Community'
import CommunityLayout from '@/components/layout/CommunityLayout'
import React from 'react'
import { useAppSelector } from "@/hooks/reduxHooks"
import { useAuth } from "@/hooks/useAuth"
import Loader from '@/components/utils/Loader'

export default function CommunityPage() {
  const {isAuthenticated} = useAppSelector((state=>state.user))
  useAuth()
  return (
    <>
        {isAuthenticated?
            <CommunityLayout>
                <CommunityMain/>
            </CommunityLayout>:<Loader/>
        }
    </>

  )
}
