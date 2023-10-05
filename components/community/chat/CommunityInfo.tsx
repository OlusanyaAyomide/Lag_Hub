import { useTrimmedText } from '@/hooks/TextHooks'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import UserAvatar from '@/components/utils/UserAvatar'
import { mocKDescription, mockMessagesarray } from '@/utils/constants'
import { shouldTrim } from '@/lib/utils'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useAppSelector } from '@/hooks/reduxHooks'
import { useGetRequest } from '@/hooks/useRequestProcessor'
import { getCommunityUser } from '@/hooks/requests/endPoints'
import { AxiosResponse } from 'axios'
import { ICommunityInfoResponse, ICommunityUser } from '@/utils/responeInterface'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Linkify from 'linkify-react'
import CommunityLoader from '../CommunityLoader'
import UserList from '@/components/utils/UserList'
import { Icons } from '@/utils/icons'

export default function CommunityInfo() {
    const {communityDetail,messages,userCount} = useAppSelector((state=>state.community.community)) 
    const {customId,name,description,communityImage} = communityDetail
    const{text,toggleText,isTrimmed} = useTrimmedText(description,30)

    const [isAll,setIsAll] = useState(false)
    const mediaMessages = messages.filter(item=>item.type === "image")

    const {isLoading,data} = useGetRequest({queryKey:[customId],queryFn:()=>{return getCommunityUser(customId)}})
    const resposnse:AxiosResponse<ICommunityUser> = data 

    

    return (
    <div className='mt-6 '>
        <Card className='py-2 pad'>
            <Avatar className='h-20 w-20 mx-auto block'>
                <AvatarFallback>Lh</AvatarFallback>
                <AvatarImage src={communityImage} />
            </Avatar>
            <h1 className="text-center font-medium uppercae">{name}</h1>
            <h1 className="tinytext text-center">{userCount} participants</h1>
            <Linkify>
            <h1 className={`mt-1 ${text.length>20?"":"text-center"}`}>
                {text}
                {shouldTrim(30,mocKDescription) && <button className='ml-2 text-main  font-medium' onClick={toggleText}>{isTrimmed?"less":"..more"}</button>}
            </h1>
            </Linkify>
        </Card>

        <Tabs defaultValue='members' className='mt-4'>
            <TabsList className='mx-auto w-fit block'>
                <TabsTrigger className='px-8' value="members">Members</TabsTrigger>
                <TabsTrigger className='px-8' value="media">Media</TabsTrigger>
            </TabsList>
            <TabsContent value='members'>
                <Card className='mt-1 py-2 px-0'>
                    <h1 className='mb-2 ml-2 font-medium px-2'>Community members</h1>
                    {isLoading && <CommunityLoader/>}
                    {data && <div className='px-3'>
                        {resposnse.data.data.map((item,key)=>(
                        <UserList user={item.users} showStatus key={key}/>
                    ))}
                    {resposnse.data.data.length >5 && <button onClick={()=>{setIsAll((prev=>!prev))}}
                     className="block mt-3 mx-auto text-main">View {isAll?"less":"all"}</button>}
                    </div>}
    
                </Card>
            </TabsContent>

            <TabsContent value='media'>
                <Card className='flex flex-wrap pt-5 pad justify-between'>
                    {mediaMessages.map((item,key)=>(
                        <div key={key} className='h-[120px] w-[120px] mx-1 mb-1 overflow-hidden'>
                            <div className="h-20 w-20 relative rounded-md overflow-hidden">
                                <Image fill src={item.imageUrl} className='h-full w-full object-cover' alt="" />
                            </div>
                        </div>
                    ))}
                    {mediaMessages.length === 0 && <div className='grow opacity-70'>
                        <h1 className="flex-center mt-6 justify-center text-shade">
                            <Icons.emptycirle className='text-[48px]'/>
                        </h1>
                        <h1 className="mt-2 text-center">This chat has no media</h1>
                    </div>}
                </Card>
            </TabsContent>
        </Tabs>
        
    </div>
  )
}
