import React,{useRef,useState} from 'react'
import UserAvatar from '../utils/UserAvatar'
import { Icons } from '@/utils/icons'
import { Button } from '../ui/button'
import ProfileInput from './ProfileInput'
import { validateProfileUpdate as validate } from '../utils/validator'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { IProfileEdit } from '@/utils/interfaces'
import { useFormik } from 'formik'
import { editProfileRequest as mutationFn } from '@/hooks/requests/endPoints'
import { usePostRequest } from '@/hooks/useRequestProcessor'
import {  AxiosResponse } from 'axios'
import { IEditProfileResponse } from '@/utils/responeInterface'
import { userActions } from '@/store/authSlice'
import RadioLoader from '../utils/RadioLoader'


export default function ProfileEdit() {
    const ref = useRef<HTMLInputElement>(null)
    const {firstName,lastName,username} = useAppSelector((state=>state.user.data))
    const initialValues:IProfileEdit = {firstName,lastName}
    const dispatch = useAppDispatch()

    const {isLoading,mutate} = usePostRequest({mutationFn,
        onSuccess:({data:{data}}:AxiosResponse<IEditProfileResponse>)=>{
            dispatch(userActions.updateProfileStatus(data))
        }})

    const formik = useFormik<IProfileEdit>({
        initialValues,validateOnChange:false,validateOnBlur:true,
        validate,
        onSubmit:(value)=>{
            mutate(value)
        }
    })
    return (
    <div className='mt-4 pb-8'>
        <h1 className="bigtext font-semibold text-center mb-1">{username}</h1>
        <div className="rounded-full mb-4 pb-2 h-fit w-fit mx-auto relative">
            <UserAvatar className='h-32 w-32 sm:h-36 sm:w-36'/>
            <Button size={"icon"} variant={'ghost'} onClick={()=>{ref.current?.click()}} className="absolute h-7 hidden w-7 bg-background right-1 bottom-[20%]">
                <Icons.camera className='text-2xl text-main'/>
            </Button>
            <input type="file" alt='Profile Image' className="hidden" />
        </div>

        <form onSubmit={formik.handleSubmit}>
            <ProfileInput
                placeholder='firstName'
                text='FirstName' 
                autofocus
                name='firstName'
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.firstName?formik.errors.firstName:""}
                />

            <ProfileInput 
                placeholder='lastName'
                text='LastName'
                name='lastName'
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lastName?formik.errors.lastName:""}
                />

            <Button disabled={isLoading} className='bg-main ml-auto h-8 flex items-center px-6 hover:bg-blue-500 mt-5'>
                {!isLoading?<>
                    <span>Save</span> <Icons.save className='text-lg ml-2'/>
                </>:<RadioLoader/>}
            </Button>
        </form>
     
    </div>
  )
}
