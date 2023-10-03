import { Icons } from '@/utils/icons'
import { Button } from '../ui/button'
import { useRouter } from 'next/router'
import Cookies from "js-cookie"
import socket from '@/sockets/sockets'
import { useAppDispatch } from '@/hooks/reduxHooks'
import { layoutActions } from '@/store/layoutSlice'
import { userActions } from '@/store/authSlice'

interface ILogoutAlert{
    closeref:React.RefObject<HTMLButtonElement>
}
export default function LogOutAlert({closeref}:ILogoutAlert) {
    const router = useRouter()
    const dispatch = useAppDispatch()
  return (
    <div className='px-2 md:px-3 py-1 w-full'> 
        <button onClick={()=>{closeref.current?.click()}} className="block rounded-full p-1 hover:bg-accent ml-auto text-shade text-xl">
            <Icons.cancel/>
        </button>
        <h1 className="my-4 mb-8 font-medium text-center text-sm">Are you really sure you want to log out of goConnect?</h1>
        <div className="flex justify-between">
            <Button onClick={()=>{closeref.current?.click()}} variant={"outline"} className=' shadow-md hover:bg-accent grow mr-2 sm:mr-3'>
                <span>Cancel</span>
            </Button>
            <Button onClick={()=>{
                Cookies.remove("authCookie")
                socket.disconnect()
                dispatch(layoutActions.setAuthStatus("unauthenticated"))
                dispatch(userActions.revokeAuth())
                router.push("/boarding/signin")
            }}
            className='bg-main shadow-md hover:bg-blue-500 text-white grow ml-2 sm:ml-3'>
                <span>Logout</span>
            </Button>
        </div>

    </div>
  )
}
