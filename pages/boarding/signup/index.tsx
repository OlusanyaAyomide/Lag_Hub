import React from 'react'
import { AnimatePresence } from 'framer-motion'
import SignUp from '@/components/boarding/SignUp'
import { useAuth } from '@/hooks/useAuth'
import Loader from '@/components/utils/Loader'
import { useAppSelector } from '@/hooks/reduxHooks'
import BoardingLayout from '@/components/boarding/BoadringLayout'
import AuthLayout from '@/components/boarding/AuthLayout'
import SetupAccount from '@/components/boarding/SetupAccount'


export default function SignUpPage() {
    useAuth()
    const {signupstep,authStatus} = useAppSelector((state=>state.layout))
    return (
    <>
        {authStatus === "unauthenticated"?<BoardingLayout>
            <AuthLayout>
                <AnimatePresence>
                    {signupstep === "signup"? 
                    <div>
                        <SignUp/>
                    </div>:
                    <div>
                        <SetupAccount/>
                    </div>
                    }
                </AnimatePresence>
            </AuthLayout>
        </BoardingLayout>:<Loader/>  
        }
    </>
  )
}
