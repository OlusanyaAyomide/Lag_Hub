import React from 'react'
import { Button } from '../ui/button'
import { Icons } from '@/utils/icons'
import { Popover,PopoverContent,PopoverTrigger } from '../ui/popover'
import AutoComplete from './AutoComplete'

export default function SearchToggler() {
  return (
    <Popover>
        <PopoverTrigger asChild>
            <Button size={"icon"} variant={"ghost"} className={`text-shade`}>
                <Icons.search  className="text-2xl md:hidden"/>
                <Icons.notification className=" max-md:hidden text-2xl"/>
            </Button> 
        </PopoverTrigger>
        <PopoverContent className='h-[80vh]  right-2 w-[calc(100vw-30px)] max-w-[400px] top-3 relative overflow-scroll default-scroll'>
            <div className="md:hidden">
                <AutoComplete/>
            </div>
            <div className="max-md:hidden">Notification</div>
        </PopoverContent>
    </Popover>

  )
}
