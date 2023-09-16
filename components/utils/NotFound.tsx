import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='my-12  w-full'>
        <div className=' pb-0 '>
            <div className="border-b border-shade mx-auto min-h-[270px] md:h-[320px] w-[280px] sm:-[300px] md:w-[320px] animate-slowbounce">
                <Image fill className='h-full max-w-[300px] w-full' src="/notFound.svg" alt="Not found " />
            </div>
            <h1 className="text-shade text-sm mt-1 font-medium text-center">Resoure not found</h1>
            <Link href={"/"}>
                <h1 className="text-center hover:underline">Back to home</h1>
            </Link>
       
        </div>
    </div>
  )
}
