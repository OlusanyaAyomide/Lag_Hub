import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function GetStarted() {
  return (
    <div className='mb-8'>
        <div className="h-[250px] mx-auto w-[250px] relative grid place-content-center" id='get-started'>
            <div className="absolute z-20 inset-0 grid place-content-center">
                <div className='border-[8px] rounded-full opacity-40 h-[100px] w-[100px] border-transparent border-t-purple-600 border-r-purple-600 animate-spinner'></div>
            </div>
            <div className="absolute z-20  inset-0 grid place-content-center">
                <div className='border-[8px] rounded-full opacity-40 h-[150px] w-[150px] border-transparent border-t-main border-r-main animate-herospin2'></div>
            </div>
            
            <Link href={"/boarding/signup"}>
                <Button className='bg-main px-8 relative z-30 hover:bg-blue-500'>
                    <span className = "text-white">Create new account</span>
                </Button>
            </Link>

        </div>
    </div>
  )
}
