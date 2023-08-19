import React from 'react'
import { MockSearchResult } from '@/utils/constants'
import UserAvatar from '../utils/UserAvatar'

export default function CommunityList() {
  return (
    <div>
        {MockSearchResult.map((item,key)=>(
            <div className="flex-center pad rounded-md cursor-pointer mb-3 hover:bg-accent" key={key}>
                <UserAvatar/>
                <span className="font-medium ml-2">{item.name}</span>
            </div>
        ))}
    </div>
  )
}
