import React from 'react'
import { Drawer } from "vaul";
import { Button } from '../ui/button';
import { Icons } from '@/utils/icons';
import MainChat from './MainChat';
import Spinners from '../layout/Spinners';

export default function LiamTrigger() {
  return (
    <Drawer.Root shouldScaleBackground>
    <Drawer.Trigger asChild>
        <div>
            <button className='fixed z-30 bottom-2 right-2 animate-slowbounce p-1 rounded-full bg-main text-white animate-all shadow-lg shadow-main text-3xl'>
                <Icons.robot className='text-4xl sm:text-[38px]'/>
            </button>
        </div>
    </Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay  className="fixed inset-0 z-40 bg-black/40" />
      <Drawer.Content className="bg-background/80 backdrop-blur-lg pt-2 z-50  rounded-t-[10px] h-[96%] mt-20 fixed bottom-0 left-0 right-0">
        <Drawer.Close className='block mx-auto'>
          <div  className="mx-auto w-12 h-1.5 cursor-pointer flex-shrink-0 rounded-full bg-zinc-100  mb-4" />
        </Drawer.Close>
        <div className='max-w-lg mx-auto rounded-lg relative h-full overflow-hidden bg-page'>
          <div className="fixed w-full pt-8 z-20 max-w-[512px] bottom-0 opacity-20 h-[90%] overflow-hidden">
            <Spinners/>
          </div>
          <MainChat className='overflow-scroll default-scroll'/>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
  )
}
