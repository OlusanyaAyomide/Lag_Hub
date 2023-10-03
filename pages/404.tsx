import BoardingLayout from '@/components/boarding/BoadringLayout'
import NotFound from '@/components/utils/NotFound'
import React from 'react'

export default function NoPage() {
  return (
    <BoardingLayout>
        <div className='h-[80vh] w-full'>
            <NotFound/>
        </div>
    </BoardingLayout>

  )
}
