import React, { useState } from 'react'
import { Card } from '../ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BasicPost from '@/components/feed/BasicPost'
import { mockComments } from '@/utils/constants'
import Link from 'next/link'

export default function Activities() {

    const [showAll,setShowAll] = useState(false)
    return (
    <div className='mt-6'>
        <Tabs defaultValue='posts'>
            <Card className='pad py-2'>
                <span className="font-medium block">Johnson Activities</span>
                <span className='text-[10px]'>15 followers</span>
                <TabsList className='mx-auto mt-6 w-full block'>
                    <TabsTrigger className='px-8 w-6/12' value="posts">Posts</TabsTrigger>
                    <TabsTrigger className='px-8 w-6/12' value="comment">Comments</TabsTrigger>
                </TabsList>
            </Card>
        <TabsContent value='posts'>
            <BasicPost type="image" isSharing={true}/>
            <BasicPost type="text" />
        </TabsContent>
        <TabsContent value='comment'>
            <Card className='py-2 pad pt-2'>
                {mockComments.map((item,key)=>(
                    <div key={key}>
                        {((key<5) || (showAll)) && 
                        <Link href={"/"}>
                            <div className='py-3 border-b'>
                                <span className='tinytext'>JohnsonDon Commented TravisPost</span>
                                <span className='block mt-2 text-xs'>{item.comment}</span>
                            </div>
                        </Link>
                    }
                    </div>
                ))}
                {mockComments.length > 5 && <button onClick={()=>{setShowAll((prev=>!prev))}} className='text-main block mx-auto mt-3'>Show {showAll?"less":"all"}</button>}
            </Card> 
        </TabsContent>
        </Tabs>

    </div>
  )
}
