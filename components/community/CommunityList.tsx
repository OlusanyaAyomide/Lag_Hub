import React,{useState} from 'react'
import { cn } from '@/lib/utils'
import { ICommunity, IUser } from '@/store/interfaces'
import ComSearchResult from './ComSearchResult'

interface ICommunityList{
   className?:string,communities:ICommunity[]
   showAll:boolean
}

export default function CommunityList({className,communities,showAll}:ICommunityList) {
    const maxLength = 4
    const [totoalLength,setTotalLength] = useState(maxLength)
    return (
        <div className={cn('mb-0 py-2  cursor-pointer',className)}>
        {communities.map((item,key)=>{
            if(key > totoalLength){return null}
            return(
                <ComSearchResult {...item} key={key}/>
            )
    })}
    {showAll && (communities.length-1) > maxLength && <button onClick={()=>{setTotalLength((prev=>prev===maxLength?communities.length:maxLength))}}
     className='text-main mx-auto  block mt-3 mb-1'>show {totoalLength ===maxLength?"all":"less"}</button>}
    </div>
  )
}