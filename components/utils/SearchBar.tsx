import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Icons } from '@/utils/icons'

export default function SearchBar({onClick=()=>{}}:{onClick?:()=>void}) {
  return (
    <div className='flex items-center mt-3'>
    <Input onClick={onClick} className='grow mr-2 focus-visible:ring-0'/>
    <Button className='ml-2' variant={"ghost"} size={"icon"}>
        <Icons.search className='text-2xl'/>
    </Button>
    </div>
  )
}
