import React from 'react'
import UserAvatar from '../utils/UserAvatar'
import Link from 'next/link'
import { Card } from '../ui/card'
import { isDateToday, truncateString } from '@/lib/utils'
import { Icons } from '@/utils/icons'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { getDmList as queryFn } from '@/hooks/requests/endPoints'
import { useGetRequest } from '@/hooks/useRequestProcessor'
import { AxiosResponse } from 'axios'
import { IUSerDmResponse } from '@/utils/responeInterface'
import { dmListActions } from '@/store/dmListSlice'
import Timeago from 'react-timeago'
import DmListSkeleton from './DmLIstSketeton'

export default function MessageList() {
    
    const mockArray = [1,2,3,4,5,6,7,8,9,10]
    const {activeUsers} = useAppSelector((state=>state.layout))
    const {conversations} = useAppSelector((state=>state.dmlist))
    const {unread} = useAppSelector((state=>state.user.data))
    const dispatch = useAppDispatch()
    // const {} = useAppSelector((state=>state.))
    const {isLoading} = useGetRequest({queryKey:["user-dm"],queryFn,
    onSuccess:({data:{data}}:AxiosResponse<IUSerDmResponse>)=>{
        dispatch(dmListActions.setUserDms(data.conversations))
    }})

    return (
    <div className='pad py-4 px-2'>
        {mockArray.length > 0 &&
        <Card className='py-3  w-full relative overflow-hidden  inline-block'>
            <h1 className="font-medium mb-1 pad">Active Users {`(${activeUsers.length})`}</h1>
            <div className="max-w-[84vw] md:px-2 pt-2 xl:w-[40vw] md:max-w-[60vw] mx-auto">
                <div className='flex-center w-full default-scroll pb-4 overflow-scroll '>
                    {activeUsers.map((item,key)=>(
                        <div key={key} className='h-fit w-14 mr-1'>
                            <UserAvatar
                                username={item.username}
                                isPrivate={false}
                                src={item.profileImage}
                                theme={item.profileTheme}    
                                customLink={`/chats/${item.username}`}  
                            />
                            <h1 className="mt-[2px] text-[11px] text-shade">
                                {truncateString(item.username,8)}
                            </h1>
                        </div>
                     ))}
                </div>
            </div>
        </Card>
        }
        <Card className='mt-8  py-3 min-h-[200px]'>
            <h1 className='font-medium mb-4 pad'>
                <span>Private Messages </span> 
                {unread > 0 && <span>{`(${unread} unread)`}</span>}
            </h1>
            {isLoading && conversations.length === 0 && <DmListSkeleton/>}
            {conversations.map((item,key)=>{
                const postedDate = new Date(item.createdAt)
                const isToday = isDateToday(item.createdAt)
                return(<div className='py-3 pad flex-center rounded-md' key={key}>
                    <UserAvatar
                        username={item.user.username}
                        isPrivate={false}
                        src={item.user.profileImage}
                        theme={item.user.profileTheme} 
                            
                    />
                    <Link href={`/chats/${item.user.username}`} className='text-foreground grow hover:no-underline'>
                        <div className="grow cursor-pointer py-1 hover:bg-accent px-2 flex justify-between relative">
                            <div>
                                <h1 className='font-semibold'>{truncateString(item.user.username,18)}</h1>
                                <span className={`font-light ${item.unreadCount>0?"font-medium":""}`}>{truncateString(item.lastMessage,25)}</span>
                            </div>
                            <div>
                                <span className='text-[8px]'> 
                                    {isToday || <Timeago date ={postedDate}/> }  </span>
                            </div>
                           {item.unreadCount >0?
                           <div className='flex-center justify-center bg-red-500 rounded-full absolute bottom-[6px] right-2 text-white text-[10px] h-4 w-4 pt-[1px]'>{item.unreadCount}</div>:<Icons.doubleCheck className={`text-lg absolute bottom-[6px] right-3 ${item.lastIsRead?"text-green-500":"text-shade"}`}/>}
                        </div>
                    </Link>
                </div>)})}
        </Card>
    </div>
  )
}
