import React from 'react'
import UserAvatar from '../utils/UserAvatar'
import Link from 'next/link'
import { Card } from '../ui/card'
import { mockMessagesarray } from '@/utils/constants'
import { truncateString } from '@/lib/utils'
import { Icons } from '@/utils/icons'

export default function MessageList() {

    const mockArray = [1,2,3,4,5,6,7,8,9,10]
    return (
    <div className='pad py-4 px-2'>
        {mockArray.length > 0 &&
        <Card className='py-3  w-full relative overflow-hidden  inline-block'>
            <h1 className="font-medium mb-1 pad">Active Users (24)</h1>
            <div className="max-w-[84vw] md:px-2 pt-2 xl:w-[40vw] md:max-w-[60vw] mx-auto">
                <div className='flex-center w-full default-scroll pb-4 overflow-scroll '>
                    {mockArray.map((item,key)=>(
                    <Link key={key} href={"/"} >
                        <div key={key} className='shink-0 mr-3 md:mr-4 h-fit w-fit relative rounded-full'>
                        <UserAvatar/>
                        <div className="h-2 w-2 absolute rounded-full bottom-[6px] right-0 bg-green-500"></div>           
                        </div>
                    </Link>
                 ))}
                </div>
            </div>
        </Card>
        }
        <Card className='mt-8  py-3'>
            <h1 className='font-medium mb-4 pad'>Private Messages</h1>
            {mockMessagesarray.map((item,key)=>(
                <Link href={"/chats/abcd"} key={key}>
                    <div className='py-3 pad flex-center rounded-md cursor-pointer hover:bg-accent' key={key}>
                    <UserAvatar/>
                    <div className="grow ml-2 flex justify-between relative">
                        <div>
                            <h1 className='font-medium'>{truncateString(item.name,18)}</h1>
                            <span className={`tinytext ${item.unread>0?"font-medium":""}`}>{truncateString(item.message,25)}</span>
                        </div>
                        <div>
                            <span className='text-[8px]'>9:42pm</span>
                        </div>
                       {!item.unread && <span className='absolute bottom-0 right-0 text-lg text-main'><Icons.tick/></span>}
                       {item.unread >0 && 
                       <div className='flex-center justify-center bg-red-500 rounded-full absolute -bottom-1 right-0 text-white text-[10px] h-4 w-4 pt-[1px]'>{item.unread}</div>}
                    </div>
                </div>
                </Link>
         
            ))}
        </Card>
    </div>
  )
}
