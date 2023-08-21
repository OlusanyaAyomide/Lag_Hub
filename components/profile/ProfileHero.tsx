import React from 'react'
import { Card } from '../ui/card'
import UserAvatar from '../utils/UserAvatar'
import { Dialog,DialogTrigger,DialogContent } from '../ui/dialog'
import { Button } from '../ui/button'
import { Icons } from '@/utils/icons'
import ProfileEdit from './ProfileEdit'
import { useTrimmedText } from '../hooks/TextHooks'
import { mocKDescription } from '@/utils/constants'
import { shouldTrim } from '@/lib/utils'

export default function ProfileHero({onOverlay}:{onOverlay?:boolean}) {
    const {text,toggleText,isTrimmed} = useTrimmedText(mocKDescription,30)
    const isUser = true
    const isfollowing  = false
    return (
        <div>
        <Card className='bg-heroL mt-4 dark:bg-heroD max-md:flex  max-md:items-end max-md:justify-center h-[150px] sm:h-[200px] relative'>
            <div className='translate-y-32 md:translate-y-40 md:pl-8 max-md:w-fit md:flex md:items-center'>
                <div className="block h-32 w-32 mx-auto sm:h-36 sm:w-36 p-1 bg-background rounded-full">
                    <UserAvatar className='h-full w-full shadow-sm'/>
                </div>
                <div className='md:ml-2 grow md:flex'>
                    <div>
                        <h1 className="text-lg sm:text-xl font-semibold">Jonson Doris Simon</h1>
                        <h1 className='font-medium max-md:text-center -mt-[2px]'>@johnsondoris</h1>
                        <div className=" text-[10px] max-md:text-center">
                            <span className='mr-4'>20 followers</span>
                            <span>16 following</span>
                        </div>
                    </div>
                    
                    <div>
                        {isUser &&  <Dialog>
                            <DialogTrigger asChild>
                                <div>
                                    <Button className='h-8 max-md:flex hover:bg-blue-500 mx-auto bg-main  md:ml-6 max-md:mt-1 flex-center text-white px-6'>
                                    <span>Edit Profile</span> <Icons.edit className='text-lg ml-2'/>
                                    </Button>
                                </div>
                            </DialogTrigger>
                            <DialogContent className='max-h-[90svh] overflow-auto default-scroll'>
                                <ProfileEdit/>
                            </DialogContent>
                        </Dialog>}
                        {!isUser && <Button className='h-8 max-md:flex hover:bg-blue-500 mx-auto bg-main  md:ml-6 max-md:mt-1 flex-center text-white px-6'>
                            {isfollowing?<>
                                <span>Follow</span> <Icons.follow className='text-lg ml-2'/>
                            </> :<span>Following</span>}
                        </Button>}
                    </div>
           
                </div>
            </div>  
        </Card>
        <div className="md:pl-8 mt-36 md:mt-28">
                <div className='rounded-md bg-accent/50 pad py-3'>
                <h1 className="font-medium">Profile biography</h1>
                <div className="py-1">
                    <span>{text}</span>
                    {shouldTrim(30,mocKDescription) && <button className='font-medium ml-2' onClick={toggleText}>{isTrimmed?"show less":"...show more"}</button>}
                </div>
                </div>
           
            </div>
        </div>
     
  )
}
