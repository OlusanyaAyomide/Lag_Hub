import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Icons } from '@/utils/icons'
import CommunityList from './CommunityList'
import { ICommunity } from '@/store/interfaces'
import { useAppSelector } from '@/hooks/reduxHooks'
import socket from '@/sockets/sockets'
import Noresult from '../utils/Noresult'

export default function CommunityDialog({communities}:{communities:ICommunity[]}) {
  const [text,setText] = useState("")
  const {searchedCommunity} = useAppSelector((state=>state.layout))
  // const placeholder = [...searchedCommunity]
  // const tobeRendered = placeholder.splice(0,5)
  return (
    <div className='h-[350px] overflow-scroll default-scroll'>
        <div className="flex-center mb-4 mt-6 px-3">
            <Input placeholder='search' 
            value={text}
              className='grow ' 
              onChange={(e)=>{
                setText(e.target.value)
                socket.emit("search-community",{text:e.target.value})
              }
            }
              />
            <Button className='ml-3 opacity-0' variant={"ghost"} size={"icon"}>
                <Icons.search className='text-2xl'/>
            </Button>  
        </div>
        {text!=="" && <div>
            {searchedCommunity.length > 0 && <h1 className='font-medium mb-2 pad'>Search result</h1>}
            <CommunityList showAll={true}  communities={searchedCommunity}/>
            {searchedCommunity.length === 0 && <Noresult/>}
        </div>} 

        {text === "" && <div>
          <h1 className="font-medium mb-2 pad">Popular Communities</h1>
          <CommunityList showAll={false} communities={communities}/>
        </div>}
      

    </div>
  )
}
