import React from 'react'
import { Card } from '../ui/card'
import UserAvatar from '../utils/UserAvatar'
import { Dialog,DialogTrigger,DialogContent } from '../ui/dialog'
import { Button } from '../ui/button'
import { Icons } from '@/utils/icons'
import ProfileEdit from './ProfileEdit'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import Link from 'next/link'
import { followUser as mutationFn } from '@/hooks/requests/endPoints'
import { usePostRequest } from '@/hooks/useRequestProcessor'
import { profilePageActions } from '@/store/profilePageSlice'
import RadioLoader from '../utils/RadioLoader'
import socket from '@/sockets/sockets'
import { userActions } from '@/store/authSlice'


export default function ProfileHero() {
    const {username,firstName,lastName} =useAppSelector((state=>state.user.data))
    const {user} =useAppSelector((state=>state.profilePage))
    const dispatch = useAppDispatch()
    const isUser = user.username === username

    const {isLoading,mutate} = usePostRequest({mutationFn,
        sucessText:`you are now following ${user.username}`,
        onSuccess:()=>{
        dispatch(profilePageActions.followUser())
        dispatch(userActions.increasefollowing())
        socket.emit("follow-user",{username:user.username,_id:user._id})
    }})
    console.log(user.isfollowing)

    return (
        <div className='mb-36 md:mb-28'>
        <Card className='bg-heroL mt-4 dark:bg-heroD max-md:flex  max-md:items-end max-md:justify-center h-[150px] sm:h-[200px] relative'>
            <div className='translate-y-32 md:translate-y-40 md:pl-8 max-md:w-fit md:flex md:items-center'>
                <div className="block h-32 w-32 mx-auto sm:h-36 sm:w-36 p-1 bg-background rounded-full">
                    <UserAvatar isPrivate={false}
                     src={user.profileImage} 
                     theme={user.profileTheme}
                     username={user.username}
                     showStatus={false}
                     className='h-full w-full shadow-sm '/>
                </div>
                <div className='md:ml-2 grow md:flex'>
                    <div>
                        <h1 className="text-lg sm:text-xl font-semibold md:max-w-[180px] lg:max-w-[300px]">{user.username}</h1>
                        <h1 className='font-medium max-md:text-center -mt-[2px]'>
                            <span>{isUser?firstName:user.firstName}</span>
                            <span className='ml-2'>{isUser?lastName:user.lastName}</span>
                        </h1>
                        <div className=" text-[10px] max-md:text-center">
                            <span className='mr-4'>{user.followers} followers</span>
                            <span>{ user.following} following</span>
                        </div>
                    </div>
                    
                    <div>
                        {isUser &&  <Dialog>
                            <DialogTrigger asChild>
                                <div>
                                    <Button className='h-8 max-md:flex hover:bg-blue-500 mx-auto bg-main  md:ml-6 max-md:mt-1 flex-center text-white px-6'>
                                    <span className='whitespace-nowrap'>Edit Profile</span> <Icons.edit className='text-lg ml-2'/>
                                    </Button>
                                </div>
                            </DialogTrigger>
                            <DialogContent className='max-h-[90vh] overflow-auto default-scroll'>
                                <ProfileEdit/>
                            </DialogContent>
                        </Dialog>}
                        {!isUser && <div className='flex flex-col '>
                        {user.isfollowing?
                        <Button className='h-8 max-md:flex hover:bg-blue-500 mx-auto bg-main  md:ml-6 max-md:mt-1 flex-center text-white px-6'>
                            <span>Following</span> <Icons.follow className='text-lg ml-2'/>
                        </Button>:
                         <Button onClick={()=>{mutate({_id:user._id})}}
                          disabled={isLoading} className='h-8 max-md:flex hover:bg-blue-500 mx-auto bg-main  md:ml-6 max-md:mt-1 flex items-center justify-center text-white px-6'>
                                {isLoading?<RadioLoader/>:<span>Follow</span>}
                         </Button>}
                        <Link href={`/chats/${user.username}`}  className='hover:no-underline'>
                            <Button variant={'ghost'} className='px-4 whitespace-nowrap md:ml-[10px] mt-[2px] h-8 mx-auto flex items-center '>
                                <span>send a Dm</span>
                                <span className='ml-1'>{<Icons.messenger className='text-main text-lg'/>}</span>
                            </Button>   
                        </Link>
                  
                        </div>
                   }
                    </div>
           
                </div>
            </div>  
        </Card>
        </div>
     
  )
}
