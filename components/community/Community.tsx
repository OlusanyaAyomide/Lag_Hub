import React,{useRef,useState} from 'react'
import { Card } from '../ui/card'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { Input } from '../ui/input'
import CommunityList from './CommunityList'
import CommunityDialog from './CommunityDialog'
import { Icons } from '@/utils/icons'
import NewCommunity from './NewCommunity'
import Image from 'next/image'
import { useGetRequest } from '@/hooks/useRequestProcessor'
import { getActiveCommunities as queryFn} from '@/hooks/requests/endPoints'
import { AxiosResponse } from 'axios'
import { ICommunityListResponse } from '@/utils/responeInterface'
import CommunityLoader from './CommunityLoader'
import { DialogClose } from '@radix-ui/react-dialog'

export default function CommunityMain() {
  const ref = useRef<HTMLButtonElement>(null)
  const closeref = useRef<HTMLButtonElement>(null)
  const [num,setnum] = useState(0)
  const {isLoading,data} = useGetRequest({queryFn,queryKey:[`active-community`,`num-${num}`]})
  const communities = data as AxiosResponse<ICommunityListResponse>
  return (
    <div>
      <Card className='pad py-2 mt-4  bg-opacity-50'>
          <h1 className="bigtext font-medium mt-3 mb-1 text-center">Welcome To laghub Community</h1>
          <div className="mx-auto min-h-[250px] w-[270px] sm2:h-[300px] md:w-[300px]  relative">
            {/* <div className="absolute h-5 w-full bg-background top-0 "></div> */}
            <Image  fill className='h-full max-w-[300px] w-full' src="/community.svg" alt="Community Image" />
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
            {data && <CommunityDialog communities={communities.data.data?.active}/>}
          </DialogContent>
        </Dialog>
      </Card>
      <Card className='mt-8 pt-3 pb-0 px-0'>
        <h1 className="font-medium mb-2 pad">Popular Communities</h1>
          {isLoading && <CommunityLoader/>}
          {data && <CommunityList showAll={false} communities={communities.data.data?.active}/> }
      </Card>
      <Card className='mt-8 pt-3 pb-0 px-0'>
        <h1 className="font-medium mb-2 pad">My Communities</h1>
        {isLoading && <CommunityLoader/>}
          {data && <>
            {communities.data.data?.userCommunity.length >0?
            <CommunityList showAll={true} communities={communities.data.data?.userCommunity}/>:
            <div className='w-fit mx-auto my-6 opacity-70'>
              <h1 className='flex justify-center'><Icons.users className='text-[80px] text-shade'/></h1>  
              <h1 className="mt-3 text-center">Not yet a member of any community</h1>
            </div>}
          </>  }
      </Card>
      <div className="mt-8 flex-center">
        <Dialog>
          <DialogTrigger asChild>
            <div className='cursor-pointer'><Icons.plus className='text-main text-3xl'/></div>
          </DialogTrigger>
          <DialogContent>
            <DialogClose ref={closeref}></DialogClose>
            <NewCommunity toggler={setnum} closeref={closeref }/>
          </DialogContent>
        </Dialog>
        <span className="ml-2 font-medium">Create new community</span>
      </div>
    </div>

  )
}
