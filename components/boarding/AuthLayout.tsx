import React from 'react'
import Image from 'next/image'
import Logo from '../utils/Logo'



export default function AuthLayout({children}:{children:React.ReactNode}) {

    return (
        <div className='min-h-screen w-full relative z-10 paddingx md:flex md:items-center pt-16 overflow-hidden'>
            <div className="fixed h-32 z-10 w-32 rounded-full lg:-right-10 -top-12 bg-main opacity-30"></div>
            <div className='md:w-full relative  z-30'>
                <div className="w-fit mx-auto  flex-center mb-3">
                    <Logo className='w-[180px] scale-125'/>
                </div>
                <div className="md:flex md:pr-12  lg:pr-20 md:justify-center  w-full md:items-center max-w-[850px] mx-auto">
                   <div className='max-md:hidden flex pr-8 justify-end min-h-[380px]  relative grow '>
                        <Image src="/boarding.svg" fill className='w-full  h-full max-w-[450px]' alt="svgLogo" />
                   </div>
                   <div className='w-full mb-5  max-w-[420px] backdrop-blur-[2px]  backdrop-filter shadow-[0_0_16px_#0000001f] dark:shadow-[0_0_16px_#ffffff1f]  mx-auto md:w-6/12 min-h-[320px]  rounded-lg'>
                    {children}
                   </div>
                </div>
            </div>
        </div>        

  )
}
