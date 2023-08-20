import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import { Icons } from '@/utils/icons';

export default function SendMessage() {
  return (
    <div className="fixed bottom-0 border-t shadow-sm pb-2 w-full md:max-w-[70%] xl:max-w-[44%] max-md:left-0 z-10 px-3 bg-background xl:-translate-x-4 md:-translate-x-2 lg:-translate-x-8 flex items-end">
    <TextareaAutosize placeholder='Enter message' className='w-full lg:max-w-[620px] md:max-w-[520px] mt-1 mb-[2px] rounded-lg grow outline-none peer bg-accent py-2 px-2 resize-none relative shadow-2xl' maxRows={4}>
    </TextareaAutosize>
  <button className='text-xl peer-focus-visible:hidden ml-1 mb-1'>
    <Icons.image/>
  </button>
  <button className='text-xl text-main hidden peer-focus-visible:block ml-1 mb-1'>
    <Icons.plane/>
  </button>

</div>
  )
}
