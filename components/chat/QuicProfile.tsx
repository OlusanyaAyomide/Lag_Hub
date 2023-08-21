import React from 'react'
import UserAvatar from '../utils/UserAvatar'
import { Button } from '../ui/button'
import Link from 'next/link'


export default function QuicProfile() {
  return (
    <div className="bg-backgroud pb-44">
        <div className='bg-heroL mt-8  dark:bg-heroD flex  items-end justify-center h-[120px] relative'>
        <div className='translate-y-32 w-fit'>
        <div className="block h-32 w-32 mx-auto  p-1 bg-background rounded-full">
             <UserAvatar className='h-full w-full shadow-sm'/>
        </div>
        <div>
            <h1 className="text-lg  font-semibold">Jonson Doris Simon</h1>
            <h1 className='font-medium text-center -mt-[2px]'>@johnsondoris</h1>
            <div className=" text-[10px] text-center">
                <span className='mr-4'>20 followers</span>
                <span>16 following</span>
            </div>
            <Link href="/profile/abcd">
            <Button className='h-8 flex itemx-center bg-main hover:bg-blue-500 mt-4 w-full text-white'>View Profile</Button>
            </Link>
          
        </div>
        </div>
    </div>
    </div>
 
  )
}
