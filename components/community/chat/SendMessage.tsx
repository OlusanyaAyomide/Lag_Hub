import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import { Icons } from '@/utils/icons';
import { Button } from '@/components/ui/button';

export default function SendMessage({isLiam}:{isLiam?:boolean}) {
  const isJoined = true
  return (
    <div className="fixed bottom-0 border-t shadow-sm pb-2 w-full md:max-w-[70%] xl:max-w-[48%] max-md:left-0 z-10 px-3 bg-background xl:-translate-x-4 md:-translate-x-2 lg:-translate-x-8 flex items-end">
      {isJoined && <>
      <TextareaAutosize placeholder='Enter message' className='w-full lg:max-w-[620px] md:max-w-[520px] mt-1 mb-[2px] rounded-lg grow outline-none peer bg-accent py-2 px-2 resize-none relative shadow-2xl' maxRows={4}>
    </TextareaAutosize>
      <button className='text-xl peer-focus-visible:hidden ml-1 mb-1'>
    {!isLiam && <Icons.image/>}
    </button>
    <button className={` ${isLiam?"peer-focus-visible:text-main":"text-main hidden peer-focus-visible:block"} text-xl  ml-1 mb-1`}>
    <Icons.plane/>
    </button>
      </>}
      {!isJoined && 
        <div className='lg:max-w-[620px] md:max-w-[520px] w-full mb-[2px]'>
          <div className=''>
            <h1 className="tinytext block text-center">You are not yet a member of this community</h1>
            <Button className='mt-2 h-7 flex px-6 items-center  bg-main mx-auto hover:bg-blue-500'>Join</Button>
          </div>
         
        </div>
      }

</div>
  )
}
