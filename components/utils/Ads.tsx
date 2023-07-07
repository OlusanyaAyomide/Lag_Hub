import React from 'react'

export default function Ads() {
  return (
    <div className='w-full mb-6 '>
        <div className='bg-[blue]/10 rounded-lg h-[110px] grid place-content-center'>
            sponsored
        </div>
        <div className='mx-2 mt-2'>
            <a href="https://google.com" target='_blank'><h1 className='font-semibold'>First ad on laghub</h1></a>
            <a href="https://google.com" target='_blank'><h1 className='text-xs text-shade'>view at myweb.com</h1></a>   
        </div>
        
     
    </div>
  )
}
