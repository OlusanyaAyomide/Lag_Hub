import React,{useState} from 'react'
import { usePathname,useRouter } from 'next/navigation'
import { Card } from '../ui/card'
import Ads from './Ads'
import { Separator } from '../ui/separator'
import { NotificationDemo } from '../../utils/constants'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { useAppSelector } from '@/hooks/reduxHooks'
import UserList from './UserList'
import { Icons } from '@/utils/icons'
import Image from 'next/image'

export default function Rightsection() {
      const minLength = 4
      const {activeUsers} = useAppSelector((state=>state.layout))
      const [maxLenghth,setMaxLength] = useState(minLength)
      const isall = maxLenghth !== minLength
      return (
      <div className='hidden py-3 px-4 xl:block lg:w-[260px] shrink-0'>
         <div className='fixed default-scroll overflow-scroll h-screen w-[260px] right-4 pb-32'>
            <Card className='pb-6 pt-3 pad bg-background border-none'>
               <h1 className="font-semibold text-base text-shade  my-4 px-2 ">Online</h1>

               <div className='mt-2'>
                  {activeUsers.map((item,key)=>(
                     <div key={key}>
                        {key < maxLenghth &&  <UserList showStatus user={item} key={key}/>}
                     </div>
                  ))}
                  {activeUsers.length > minLength &&  <button onClick={()=>{
                     setMaxLength((prev=>prev===minLength?activeUsers.length:minLength))
                  }} className="block -mt-1 text-main ml-2">view {isall?"less":"more"}
                  </button>}
               </div>

               <Separator className='my-10 mx-auto w-[250px]'/>

               <Ads
                  header='Portfolio'
                  link='https://ayomidedev.vercel.app/'
                  text='Check out my previous projects'
               >
                  <Image src={'/myA.webp'} alt='logo'  fill className='max-w-[130px] object-contain mx-auto'/>  
               </Ads>

               <Ads
                  header='Github Account'
                  link='https://github.com/olusanyaAyomide'
                  text='check me  out on github'
               >
                  <span className='text-shade text-[70px]'><Icons.github/></span>
               </Ads>
               
            </Card>
         </div>
         
       </div>
      )
   // }
   // return null
  
}
