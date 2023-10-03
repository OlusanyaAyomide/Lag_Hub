import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IRootState } from "./rootState";
import { IUserProfile } from "@/utils/responeInterface";



export interface IProfilePageSlice{
    user:IUserProfile
}


export const initalState:IProfilePageSlice={
    user:{} as IUserProfile
}
export const profilePageSlice = createSlice({
    name:"profilePage",
    initialState:initalState,
    reducers:{
        setProfileUser(state,action:PayloadAction<IUserProfile>){
            state.user = action.payload
        },
        followUser(state){
            state.user.followers +=1
            state.user.isfollowing = true
        }

    }
})

export const profilePageActions = profilePageSlice.actions
export const authType = (state:IRootState)=>state.profilePage
export default profilePageSlice.reducer
