import React,{useRef} from 'react'
import UserAvatar from '../utils/UserAvatar'
import { Icons } from '@/utils/icons'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'

interface IProfileEdit{
    text:string
    placeholder?:string
    autofocus?:boolean
    className?:string

}

export default function ProfileEdit() {
    const ref = useRef<HTMLInputElement>(null)
    
    const ProfileEdit = ({text,placeholder,autofocus,className}:IProfileEdit)=>(
        <div className='mb-4'>
            <span className="block mb-1 font-medium uppercase">{text}</span>
            <Input className={cn("focus-visible:ring-0",className)} autoFocus={autofocus} placeholder={placeholder}/>
        </div>
    )
    return (
    <div className='mt-4'>
        <h1 className="bigtext font-semibold text-center mb-1">Johnson Doris</h1>
        <div className="rounded-full mb-6 h-fit w-fit mx-auto relative">
            <UserAvatar className='h-32 w-32 sm:h-36 sm:w-36'/>
            <Button size={"icon"} variant={'ghost'} onClick={()=>{ref.current?.click()}} className="absolute h-7 w-7 bg-background right-1 bottom-[20%]">
                <Icons.camera className='text-2xl text-main'/>
            </Button>
            <input type="file" alt='Profile Image' className="hidden" />
        </div>

        <form>
            <ProfileEdit placeholder='firstName' text='FirstName' autofocus/>
            <ProfileEdit placeholder='lastName' text='LastName'/>
            <ProfileEdit placeholder='userName' text='UserName'/>
            <Textarea className='h-[100px] focus-within:ring-0 mb-6' placeholder='Update Biography'></Textarea>
            <Button className='bg-main ml-auto h-8 flex items-center px-6 hover:bg-blue-500 mt-5'>
                <span>Save</span> <Icons.save className='text-lg ml-2'/>
            </Button>
        </form>
     
    </div>
  )
}
