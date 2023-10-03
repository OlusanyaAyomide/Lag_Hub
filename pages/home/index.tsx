import Loader from "@/components/utils/Loader"
import FeedMain from "@/components/feed/FeedMain"
import { useAppSelector } from "@/hooks/reduxHooks"
import { useAuth } from "@/hooks/useAuth"

export default function Home() {
  const {isAuthenticated} = useAppSelector((state=>state.user))
  useAuth()
  return (
    <>
      {isAuthenticated?<FeedMain/>:<Loader/>}
    </>
  )
}


