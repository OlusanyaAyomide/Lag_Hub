import React from 'react'
import { mockMessage } from '@/utils/constants'
import SingleChat from '../community/chat/SingleChat'
import SendMessage from '../community/chat/SendMessage'

export default function UserDm() {
  return (
    <div className='pad pt-14 pb-14'>
        {/* {mockMessage.map((item,key)=>{
          const prevUser = key>0?mockMessage[key-1].user:""
          return <SingleChat isPrivate={true} key={key} {...item} prevUser={prevUser}/>
        })} */}
    {/* <SendMessage/> */}
  </div>
  )
}
