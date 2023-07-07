import React from 'react'
import UserList from '../utils/UserList'
import { Separator } from '../ui/separator'
import { cn } from '@/lib/utils'
import SearchBar from '../utils/SearchBar'

export const Tempsearch = [
    {text:"Search param 1",verify:true},{text:"Search param 2",verify:false},{text:"Search param 3",verify:true}
]
export default function AutoComplete({className}:{className?:string}) {
  return (
   <section className={cn('',className)}>
    <SearchBar/>
    <div className=''>
        <h1 className='font-semibold my-2'>Popular Searches</h1>
        <UserList/>
        <Separator className='my-4'/>
        <h1 className='font-semibold my-2'>Recent Searches</h1>
        <UserList/>
    </div>
   </section>
  )
}
