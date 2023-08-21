import FeedLayout from '@/components/layout/FeedLayout'
import Activities from '@/components/profile/Activities'
import ProfileHero from '@/components/profile/ProfileHero'
import React from 'react'

export default function Profile() {
  return (
    <FeedLayout>
        <ProfileHero/>
        <Activities/>
    </FeedLayout>
  )
}
