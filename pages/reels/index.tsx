import ReelsContent from '@/components/Reels/ReelsContent'
import ReelsFIlter from '@/components/Reels/ReelsFIlter'
import FeedLayout from '@/components/layout/FeedLayout'
import Loader from "@/components/utils/Loader"
import { useAppSelector } from "@/hooks/reduxHooks"
import { useAuth } from "@/hooks/useAuth"


export default function Reels() {
  const {isAuthenticated} = useAppSelector((state=>state.user))
  useAuth()
  return (
    <>
    {isAuthenticated?
      <FeedLayout>
          <ReelsContent/>
      </FeedLayout>:<Loader/>}
    </>
    )
}
