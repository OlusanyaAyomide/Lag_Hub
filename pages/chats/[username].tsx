import Loader from "@/components/utils/Loader"
import { useAppSelector } from "@/hooks/reduxHooks"
import { useAuth } from "@/hooks/useAuth"
import DmChatMain from "@/components/chat/chatDm/DmChatMain"

export default function PrivatChat() {
  const {isAuthenticated} = useAppSelector((state=>state.user))
  useAuth()
  return (
    <>
      {isAuthenticated?<DmChatMain/>:<Loader/>}
    </>
  )
}


