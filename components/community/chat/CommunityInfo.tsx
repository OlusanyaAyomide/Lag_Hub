import { useTrimmedText } from '@/hooks/TextHooks'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import UserAvatar from '@/components/utils/UserAvatar'
import { mocKDescription, mockMessagesarray } from '@/utils/constants'
import { shouldTrim } from '@/lib/utils'
import React, { useState } from 'react'
import Link from 'next/link'

export default function CommunityInfo() {
    const{text,toggleText,isTrimmed} = useTrimmedText(mocKDescription,30)
    const mocknumbers =[1,2,3,4,,6,7,8,9,10]
    const [isAll,setIsAll] = useState(false)
    return (
    <div className='mt-6 '>
        <Card className='py-2 pad'>
            <UserAvatar className='h-20 w-20 block mx-auto'/>
            <h1 className="text-center font-medium uppercae">React Developers Forum</h1>
            <h1 className="tinytext text-center">31 participants</h1>
            <h1 className="mt-3 font-medium text-center">Group Description</h1>
            <h1 className={`mt-1 ${text.length>20?"":"text-center"}`}>
                {text}
                {shouldTrim(30,mocKDescription) && <button className='ml-2  font-medium' onClick={toggleText}>{isTrimmed?"show less":"...show more"}</button>}
            </h1>
        </Card>
        <Tabs defaultValue='members' className='mt-4'>
            <TabsList className='mx-auto w-fit block'>
                <TabsTrigger className='px-8' value="members">Members</TabsTrigger>
                <TabsTrigger className='px-8' value="media">Media</TabsTrigger>
            </TabsList>
            <TabsContent value='members'>
                <Card className='mt-1 py-2 px-0'>
                    <h1 className='mb-2 ml-2 font-medium'>Community members</h1>
                    {mockMessagesarray.map((item,key)=>(
                        <>
                        {((key<5) || (isAll)) &&  <Link key={key} href='/'>
                            <div className='mb-2 rounded-md flex-center hover:bg-accent cursor-pointer pad'>
                            <UserAvatar/>
                            <div className="ml-1">{item.name}</div>
                            </div>
                        </Link>}
                        </>
                    ))}
                    {mockMessagesarray.length >5 && <button onClick={()=>{setIsAll((prev=>!prev))}}
                     className="block mt-3 mx-auto text-main">View {isAll?"less":"all"}</button>}
                </Card>
            </TabsContent>
            <TabsContent value='media'>
                <Card className='flex flex-wrap pad justify-between'>
                    {mocknumbers.map((item,key)=>(
                        <div key={key} className='h-[120px] w-[120px] mx-1 mb-1 overflow-hidden'>
                            <div className="h-20 w-20">
                                <img src="/community.svg" className='h-full w-full object-cover' alt="" />
                            </div>
                       
                        </div>
                    ))}
                </Card>
            </TabsContent>
        </Tabs>
        
    </div>
  )
}
