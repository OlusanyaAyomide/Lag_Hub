import React,{useState} from 'react'
import FeedLayout from '@/components/layout/FeedLayout'
import Activities from '@/components/profile/Activities'
import ProfileHero from '@/components/profile/ProfileHero'
import { useGetRequest } from '@/hooks/useRequestProcessor'
import { useRouter } from 'next/router'
import { getUserProfile } from '@/hooks/requests/endPoints'
import { AxiosResponse } from 'axios'
import { IProfileResponse, IUserProfileResponse } from '@/utils/responeInterface'
import { useAppDispatch } from '@/hooks/reduxHooks'
import { profilePageActions } from '@/store/profilePageSlice'
import NotFound from '../utils/NotFound'
import ProfileSkeleton from './profileSkeleton'

export default function ProfileMain() {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const [notfound,setNotfound] = useState(false)
    const username = router.query.username as string
    const {isLoading,data} = useGetRequest({queryKey:[`profilepage-${username}`],
    queryFn:()=>{return getUserProfile(username)},setNotFound:()=>{setNotfound(true)},
    onSuccess:(res:AxiosResponse<IUserProfileResponse>)=>{
        dispatch(profilePageActions.setProfileUser(res.data.data))
    }})
    return (
    <FeedLayout>
        {data && <>
            <ProfileHero/>
            <Activities/>
        </>}
        {isLoading && <ProfileSkeleton/>}
        {notfound && <NotFound/>}
    </FeedLayout>
  )
}
