import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Icons } from '@/utils/icons'
import CommunityList from './CommunityList'

export default function CommunityDialog() {
  return (
    <div>
        <div className="flex-center mb-4 mt-6 pad">
            <Input placeholder='search' className='grow '/>
            <Button className='ml-3' variant={"ghost"} size={"icon"}>
                <Icons.search className='text-2xl'/>
            </Button>  
        </div>
        <CommunityList/>
    </div>
  )
}
