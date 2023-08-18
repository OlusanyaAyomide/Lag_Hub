import React from 'react'
import { Card } from '../ui/card'
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,
  } from "@/components/ui/select"
import { youTubecategories } from '@/utils/constants'

export default function Categories() {
  return (
   <Card className='mt-4 py-1 max-sm:w-full sm:py-2 px-2 sm:px-3 sm:pr-12 flex items-center w-fit'>
      <Select >
        <SelectTrigger className="w-[120px] sm:w-[180px] focus-visible:ring-0">
          <SelectValue placeholder="Categories" />
        </SelectTrigger>
        <SelectContent className="px-0 max-h-[75svh] overflow-auto default-scroll">
         {youTubecategories.map((item,key)=>(
            <SelectItem className="hover:bg-accent max-sm:w-[150px] px-1" key={key} value={item}>{item}</SelectItem>
         ))}
        </SelectContent>
      </Select>
      <span className='font-medium ml-3'>Select video categories</span>
   </Card>
  )
}
