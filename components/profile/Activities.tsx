import React, { useState } from 'react'
import { Card } from '../ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BasicPost from '@/components/feed/BasicPost'
import { mockComments } from '@/utils/constants'
import Link from 'next/link'
import { useAppSelector } from '@/hooks/reduxHooks'
import UserAvatar from '../utils/UserAvatar'

export default function Activities() {
    const maxLength = 4
    const [postlength,setPostLength] = useState(maxLength)
    const [showAll,setShowAll] = useState(false)
    const {user} =useAppSelector((state=>state.profilePage))
    
    return (
    <div className='mt-6'>
        <Tabs defaultValue='posts'>
            <Card className='pad py-2'>
                <span className="font-medium block">{user.username} Activities</span>
                <span className='text-[10px]'>{user.followers} followers</span>
                <TabsList className='mx-auto mt-6 w-full block'>
                    <TabsTrigger className='px-8 w-6/12' value="posts">Posts</TabsTrigger>
                    <TabsTrigger className='px-8 w-6/12' value="comment">Comments</TabsTrigger>
                </TabsList>
            </Card>
        <TabsContent value='posts'>
            {user.posts.map((item,key)=>(
                <div key={key}>
                    {key < postlength &&  <BasicPost key={key} {...item}/>}
                </div>
            ))}
            
            {(user.posts.length-1) > maxLength && <button onClick={()=>{setPostLength((prev=>prev===maxLength?user.posts.length:maxLength))}}
          className='text-main mx-auto  block mt-3 mb-1'>show {postlength ===maxLength?"all":"less"}</button>}

        </TabsContent>
        <TabsContent value='comment'>
            <Card className='py-2 pad pt-2'>
                {user.comments.map((item,key)=>(
                    <div key={key}>
                        {((key<5) || (showAll)) &&           
                        <div className='flex-center'>
                            <UserAvatar
                                isPrivate={false}
                                className='h-8 w-8'
                                theme={item.postUser.profileTheme}
                                src={item.postUser.profileImage}
                            />
                            <Link href={`/post/detail/${item.post.customId}`} className='text-foreground hover:text-main'>
                            <div className='py-3 border-b ml-1 grow'>
                                <span className='tinytext'>{user.username} Commented {item.postUser.username}&apos;s post</span>
                                <span className='block mt-1 text-xs'>{item.text}</span>
                            </div>
                        </Link>
                        </div>
                    }
                    </div>
                ))}
                {user.comments.length > 5 && <button onClick={()=>{setShowAll((prev=>!prev))}} className='text-main block mx-auto mt-3'>Show {showAll?"less":"all"}</button>}
            </Card> 
        </TabsContent>
        </Tabs>

    </div>
  )
}
