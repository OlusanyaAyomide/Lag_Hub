import React from 'react'
import { Card } from '../ui/card'
import { Select, SelectContent, SelectValue,SelectItem, SelectTrigger} from '../ui/select'
import { mockLocation } from '@/utils/TempConstants'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Icons } from '@/utils/icons'
import { Input } from '../ui/input'
import UserAvatar from '../utils/UserAvatar'

export default function ReelsFIlter() {
  
  
const convertedArray = Object.entries(mockLocation).map(([code, country]) => ({
  country: country.toLowerCase(),
  code,
}));

  return (
    <Card className='py-1 sm:py-2 mt-4   px-2 sm:px-3'>
       <h1 className='font-medium mb-2 pl-1'>Filter Reels :</h1>
       <div className='flex justify-between sm:items-center'>
        <div className='mr-2 items-center sm:flex space-x-1'>
           <Select>
             <SelectTrigger  className='w-fit text-xs sm:text-[13px]  focus-visible:ring-1 sm:w-[180px]' placeholder='By location'>
               <SelectValue placeholder="Select Location"/>  
             </SelectTrigger>   
             <SelectContent className='overflow-auto default-scroll max-h-[75vh]'>
             {convertedArray.map((item,key)=>(
             <SelectItem className="hover:bg-accent max-sm:w-[150px] px-1" key={key} value={item.code}>{item.country}</SelectItem>
             ))}
             </SelectContent>
           </Select>
           <span className='ml-1 sm:ml-3 block mt-1 font-medium'>By region</span>
        </div>
        <Popover>
         <PopoverTrigger asChild>
             <Button className='sm:px-4 text-xs sm:text-[13px]' variant={"ghost"}>
                 <span>By Keywords</span><Icons.earth className='ml-1 text-2xl annimate animate-spinner  text-main'/>
             </Button>
         </PopoverTrigger>
         <PopoverContent className='relative w-[310px] right-1 sm:right-2 lg:right-8 xl:right-28 sm:w-[400px]'>
           <div className="flex-center mb-2">
               <UserAvatar className='mr-2'/>
               <span className="font-medium">Johnsoon Noah</span>
           </div>
           <div className="flex-center py-2">
             <Input placeholder='Search videos' className='grow mr-1 sm:mr-2'/>
             <Button variant={"ghost"}><Icons.search className={`text-2xl`}/></Button>
           </div>
         </PopoverContent>
        </Popover>
       </div>

    </Card>
  )
}
