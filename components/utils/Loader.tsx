import React from 'react';
import BoardingLayout from '../boarding/BoadringLayout';
import { Icons } from '@/utils/icons';

export default function Loader() {
  return (
    <BoardingLayout>
        <div className="h-screen w-screen flex-center justify-center">
            <div>
                <div className='mb-20'>
                    <h1 className="w-fit mx-auto  mb-3 flex-center animate-pulse">
                        <span className='text-2xl text-main'>LagHub</span>
                        <span className='text-2xl ml-2 animate-spinner text-main'>{<Icons.earth/>}</span>
                    </h1>
                    <div className='rounded-md overflow-hidden w-[200px]'>
                        <div className="animate-loader h-[2px] rounded-md bg-main w-[100px] mx-auto"></div>
                    </div>
                    <h1 className="mt-2 text-center text-main text-[12px] animate-pulse">This might take a while</h1>
                </div>
            </div>
        </div>
    </BoardingLayout>
  )
}
