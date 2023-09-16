import { Icons } from '@/utils/icons'
import React from 'react'

export default function Noresult() {
  return (
    <div className='my-4 opacity-70'>
        <div className="w-fit mx-auto animate-slowbounce text-shade">
            <Icons.noresult className='text-[90px]'/>
        </div>
        <h1 className="text-shade text-center mx-auto">No matching result</h1>
    </div>
  )
}

