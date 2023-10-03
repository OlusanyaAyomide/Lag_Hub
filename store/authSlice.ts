import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IRootState } from "./rootState";
import { IUser } from "./interfaces";
import { IProfileEdit } from "@/utils/interfaces";

export interface IAuthSlice{
    data:IUser
    isAuthenticated:boolean
}

export const initalState={
    data:{
        _id:"",
        firstName:"",
        lastName:"",
        username:"",
        email:"",
        profileImage:"",
        profileTheme:"",
        createdAt:"",
        followers:0,
        following:0,
        unread:0

    } as IUser,
    isAuthenticated:false

}
export const userSlice = createSlice({
    name:"user",
    initialState:initalState,
    reducers:{
        setUserDetails(state,action:PayloadAction<IUser>){
            const {_id,firstName,lastName,username,email,profileImage,profileTheme,createdAt,followers,following} = action.payload
            state.data._id = _id,
            state.data.firstName = firstName,
            state.data.lastName = lastName
            state.data.username = username
            state.data.email = email,
            state.data.profileTheme = profileTheme
            state.data.profileImage = profileImage
            state.data.createdAt = createdAt
            state.data.followers = followers
            state.data.following = following
            state.data.unread = action.payload.unread
            state.isAuthenticated = true
        },
        revokeAuth(state){
            state.isAuthenticated = false
        },
        setUnread(state,action:PayloadAction<number>){
            state.data.unread = action.payload
        },
        increasefollowers(state,action:PayloadAction<number>){
            state.data.followers = action.payload
        },
        increasefollowing(state){
            state.data.following += 1
        },
        updateProfileStatus(state,action:PayloadAction<IProfileEdit>){
            state.data.firstName = action.payload.firstName
            state.data.lastName = action.payload.lastName
        }

    }
})

export const userActions = userSlice.actions
export const authType = (state:IRootState)=>state.user
export default userSlice.reducer
