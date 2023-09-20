import Loader from "@/components/utils/Loader"
import { useAppSelector } from "@/hooks/reduxHooks"
import { useAuth } from "@/hooks/useAuth"
import MessageList from "@/components/chat/MessageList"
import CommunityLayout from "@/components/layout/CommunityLayout"

export default function Home() {
  const {isAuthenticated} = useAppSelector((state=>state.user))
  useAuth()
  return (
    <>
      {isAuthenticated?
      <CommunityLayout>
          <MessageList/>
      </CommunityLayout> 
    :<Loader/>}
    </>
  )
}


