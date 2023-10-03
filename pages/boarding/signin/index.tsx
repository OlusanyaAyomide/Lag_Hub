import React from 'react'
import { useAuth } from '@/hooks/useAuth'
import Loader from '@/components/utils/Loader'
import { useAppSelector } from '@/hooks/reduxHooks'
import SignIn from '@/components/boarding/SignIn'


export default function SignInPage() {
    useAuth()
    const {authStatus} = useAppSelector((state=>state.layout))  
    return (
    <>
     {authStatus === "unauthenticated"?<SignIn/>:<Loader/>}
    </>
  )
}
