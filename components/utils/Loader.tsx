import React from 'react';
import BoardingLayout from '../boarding/BoadringLayout';
import { Icons } from '@/utils/icons';
import Logo from './Logo';
import { useHydration } from '@/hooks/useHydration';

export default function Loader() {  
    const {isRendered} = useHydration()
  return (
    <BoardingLayout>
        {isRendered && <div className="h-[500px] w-screen flex-center justify-center">
            <div>
                <div className='mb-20'>
                    <div className="w-fit mx-auto  flex-center animate-pulse">
                        <Logo className=''/>
                        <span className='text-lg relative bottom-1 right-2 animate-spinner text-main'>{<Icons.earth/>}</span>
                    </div>
                    <div className='rounded-md overflow-hidden w-[110px] mx-auto animate-pulse'>
                        <div className="animate-loader h-[2px] rounded-md bg-main w-[100px] mx-auto"></div>
                    </div>
                    <h1 className="mt-2 text-center text-main text-[12px] animate-pulse">This might take a while</h1>
                </div>
            </div>
        </div>}
    </BoardingLayout>
  )
}
