import CommunityChat from '@/components/community/chat/CommunityChat'
import Loader from '@/components/utils/Loader'
import { useAppSelector } from "@/hooks/reduxHooks"
import { useAuth } from "@/hooks/useAuth"

export default function CommunityRoom() {
  const {isAuthenticated} = useAppSelector((state=>state.user))
  useAuth()
  return(
      <>
        {isAuthenticated?<CommunityChat/>:<Loader/>}
      </>)
}
