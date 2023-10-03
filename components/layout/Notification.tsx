import React,{useState} from 'react'
import { notificationRequest  as queryFn} from '@/hooks/requests/endPoints'
import { useGetRequest } from '@/hooks/useRequestProcessor'
import { AxiosResponse } from 'axios'
import { INotificationResponse } from '@/utils/responeInterface'
import Link from 'next/link'
import { trimSentence } from '@/lib/utils'
import Timeago from 'react-timeago'
import NotificationSkeleton from './NotifactionSkeleton'
import { Icons } from '@/utils/icons'

export default function Notification({show=true}:{show?:boolean}) {
    const maxLength  = show?5:3
    const [length,setLength] = useState(maxLength)
    const {isLoading,data} = useGetRequest({queryKey:['user-notification'],queryFn})
    
    const notification:AxiosResponse<INotificationResponse>  = data

  return (
    <div>
        {show && <h1 className='font-sembold mb-2'>Notications</h1>}
        {notification && notification.data.data.map((item,key)=>{
            const date = new Date(item.createdAt)
            if(key > length){return}
            return <Link href={item.link} key={key} className='text-foreground hover:no-underline '>
                <div  className='w-full -mx-3 block px-2 mb-1 pt-0 pb-3 rounded-md hover:bg-accent'>
                    <h1 className="w-full relative top-1 text-[10px] text-right">
                        <Timeago date={date}/>
                    </h1>
                    <h1 className='text-[13px]'>
                        {trimSentence(item.content,16)}
                    </h1>
                </div>
            </Link>
        })} 
        {notification && notification.data.data.length > maxLength && 
            <button onClick={()=>{
                setLength(length===maxLength?notification.data.data.length:maxLength)
            }}
            className='text-main mx-auto block mt-4'>see {length===maxLength?"more":"less"}</button>}
        {isLoading &&
        <div className="mt-5"> 
            <NotificationSkeleton/>
            <NotificationSkeleton/>
            <NotificationSkeleton/>
            <NotificationSkeleton/>
        </div>
         }
        {data && notification.data.data.length === 0 && 
            <div className="pt-16 opacity-70">
                <button className='w-ft mx-auto'>
                    <Icons.notification className='text-shade  text-[60px]'/>
                </button>
                <h1 className="text-center text-shade">No notifications yet</h1>
            </div>
        }
    </div>
  )
}
