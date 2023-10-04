import React, { useState } from 'react'
import UserList from '../utils/UserList'
import { Separator } from '../ui/separator'
import { cn } from '@/lib/utils'
import { Input } from '../ui/input'
import SearchBar from '../utils/SearchBar'
import socket from '@/sockets/sockets'
import Image from 'next/image'
import { useAppSelector } from '@/hooks/reduxHooks'
import ComSearchResult from '../community/ComSearchResult'
import Noresult from '../utils/Noresult'


export const Tempsearch = [
    {text:"Search param 1",verify:true},{text:"Search param 2",verify:false},{text:"Search param 3",verify:true}
]
export default function AutoComplete({className}:{className?:string}) {
  const {searchedCommunity,searchedUser} = useAppSelector((state=>state.layout))
  const [text,setText] = useState("")
  const maxLength = 4
  const [userlength,setUserLength] = useState(maxLength)
  const [comlength,setComLength] = useState(maxLength)

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    if(e.target.value === ""){setText("");return}
    const regex = /^[a-zA-Z0-9.-]+$/;
    if(regex.test(e.target.value)){
      socket.emit("global-search",e.target.value)
      setText(e.target.value)
    }
  }
  return (
   <section className={cn('',className)}>
    <span className="font-medium">Search</span>
    <Input onChange={handleChange} value={text}
      className='block mb-3 mr-2 focus-visible:ring-0 hover:shadow-sm border-0 bg-light rounded-lg'/>

    <div>
      {text === "" && 
        <div className='h-[180px] relative'>
          <Image alt='' src="/search.svg" fill className='w-full opacity-20 absolute inset-0'/>
          <div className="absolute inset-0 grid place-content-center">
            <h1 className='font-medium  text-center'>Search Friends and communities on laghub</h1>
          </div>
        </div>
      }
    </div>
    {text !== "" && <div className=''>
      {searchedUser.length > 0 && <div className='my-3'>
        <span className="font-medium ml-2">Users</span>  
        <div>
          {searchedUser.map((item,key)=>(
            <div key={key}>
              {key<userlength && <UserList user={item} showStatus={false} key={key}/>}
            </div> 
          ))}
        {(searchedUser.length-1) > maxLength && <button onClick={()=>{setUserLength((prev=>prev===maxLength?searchedUser.length:maxLength))}}
          className='text-main mx-auto  block mt-3 mb-1'>show {userlength ===maxLength?"all":"less"}</button>}
        </div>
        {searchedCommunity.length > 0 && <Separator className='my-2 '/>}
      </div>}

      {searchedCommunity.length > 0 && <div className='mt-5'>
        <span className='font-medium ml-2'>Communities</span>
        <div>
          {searchedCommunity.map((item,key)=>(
            <div key={key}>
              {key < comlength &&  <ComSearchResult {...item} key={key}/>}
            </div>
          ))}
          {(searchedCommunity.length-1) > maxLength && <button onClick={()=>{setComLength((prev=>prev===maxLength?searchedCommunity.length:maxLength))}}
          className='text-main mx-auto  block mt-3 mb-1'>show {comlength ===maxLength?"all":"less"}</button>}
        </div>
        </div>}
        {searchedCommunity.length === 0 && searchedUser.length ===0&& <Noresult/>}
    </div>}
   </section>
  )
}
