import React,{useRef} from 'react'
import { mockMessage } from '@/utils/constants'
import SingleChat from './SingleChat'

import SendMessage from './SendMessage'

export default function ChatRoom() {

  return (
    <div className='pad pt-14 pb-14'>
      {mockMessage.map((item,key)=>{
        const prevUser = key>0?mockMessage[key-1].user:""
        return <SingleChat key={key} {...item} prevUser={prevUser}/>
      })}

      <SendMessage/>
    </div>
  )
}
