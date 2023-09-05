import React,{useRef} from 'react'
import { Card } from '../ui/card'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { Input } from '../ui/input'
import CommunityList from './CommunityList'
import CommunityDialog from './CommunityDialog'
import { Icons } from '@/utils/icons'
import NewCommunity from './NewCommunity'
import Image from 'next/image'

export default function CommunityMain() {
  const ref = useRef<HTMLButtonElement>(null)
  return (
    <div>
      <Card className='pad py-2 mt-4  bg-opacity-50'>
          <h1 className="bigtext font-medium mt-3 mb-1 text-center">Welcome To laghub Community</h1>
          <div className="mx-auto min-h-[250px] md:h-[300px] md:w-[300px]  relative">
            {/* <div className="absolute h-5 w-full bg-background top-0 "></div> */}
            <Image fill className='h-full max-w-[300px] w-full' src="/community.svg" alt="Community Image" />
          </div>
          <h1 className='font-medium text-center mt-2'>Join commumites to share ideas and meet like minds</h1>
      </Card>
      <Card className='mt-8 py-6 pad'>
        <h1 className="font-medium mb-2">Search Communities</h1>
        <Input onClick={()=>ref.current?.click()} placeholder='search' className='curosr-pointer max-w-[550px] focus-visible:ring-1'/>
        <Dialog>
          <DialogTrigger asChild>
            <button ref={ref} className='hidden'></button>
          </DialogTrigger>
          <DialogContent className='px-0'>
            <CommunityDialog/>
          </DialogContent>
        </Dialog>
      </Card>
      <Card className='mt-8 py-6 px-0'>
        <h1 className="font-medium mb-2 pad">Popular Communities</h1>
        <CommunityList/>
      </Card>
      <Card className='mt-8 py-6 px-0'>
        <h1 className="font-medium mb-2 pad">My Communities</h1>
        <CommunityList/>
      </Card>
      <div className="mt-8 flex-center">
        <Dialog>
          <DialogTrigger asChild>
            <div className='cursor-pointer'><Icons.plus className='text-main text-3xl'/></div>
          </DialogTrigger>
          <DialogContent>
            <NewCommunity/>
          </DialogContent>
        </Dialog>
        <span className="ml-2 font-medium">Create new community</span>
      </div>
    </div>

  )
}
