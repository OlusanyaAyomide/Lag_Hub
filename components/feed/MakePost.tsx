import React,{useRef} from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '../ui/separator'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Input } from '../ui/input'
import { postLinks } from '@/utils/constants'
import { Button } from '../ui/button'
import { Dialog, DialogTrigger,DialogContent } from '../ui/dialog'
import CollectivePost from './CollectivePost'


export default function MakePost() {
   const ref = useRef<HTMLButtonElement>(null)
  return (
   <Card className='py-4 mt-3 px-2 mx-auto w-full'>
      <div className="flex items-center mb-1">
         <Avatar>
            <AvatarImage src='/profile.png'/>
            <AvatarFallback>Lh</AvatarFallback>
         </Avatar>
         <Dialog>
            <DialogTrigger asChild>
               <Button  ref={ref} className='hidden'>Text</Button>
            </DialogTrigger>
            <DialogContent className='max-sm:px-2 sm:w-[500px]'>
               <CollectivePost/>
            </DialogContent>
         </Dialog>
         <Input placeholder='Post on student hub' onClick={()=>{ref.current?.click()}} className='focus-visible:ring-0 grow ml-2'/>

      </div>
      <Separator className='mt-4 mb-2  sm:max-w-[650px] sm:mx-auto'/>
      <div className='flex justify-between items-center'>
         {postLinks.map((item,key)=>{
            const Icon = item.icon
            return(
            <Button variant={"ghost"} className='rounded-none flex' key={key}>
               <Icon className='text-main text-xl sm:text-2xl'/>
               <span className='pl-[2px] text-xs:sm:text-base sm:ml-2 capitalize'>{item.name}</span>
            </Button>)
         })}
      </div>
  </Card>
  )
}
