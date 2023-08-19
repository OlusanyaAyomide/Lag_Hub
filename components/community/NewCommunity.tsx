import React,{useRef} from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Icons } from '@/utils/icons'
import { Button } from '../ui/button'


export default function NewCommunity() {
    const ref = useRef<HTMLInputElement>(null)

    return (
    <div>
        <h1 className="text-center font-medium mb-6  border-b  bigtext">Create New Community</h1>
   
        <form>
            <div className='mb-3'>
                <span className="block mb-1">Community Name</span>
                <Input placeholder="Enter Community Name"/>
            </div>
            <div className='mb-3'>
                <span className="block mb-1">Community Name</span>
                <Textarea className='focus-visible:ring-1'>

                </Textarea>
            </div>
            <div className='flex-center mb-6'>
                <span>Group Profile Image</span>
                <button type='button' className='ml-2 text-xl' onClick={()=>{
                    ref.current?.click()}}><Icons.image/></button>
                <input type="file" className='hidden' ref={ref}/>
            </div>
            <Button type='submit' className='px-6 block bg-main ml-auto text-white hover:bg-blue-500'>Create New Community</Button>
        </form>
    </div>
  )
}
