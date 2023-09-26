import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IRootState } from "./rootState";
import { IAlertInterface, ICommunity, IUser } from "./interfaces";
import { IGlobalSearchResponse, IOpenAlert } from "@/utils/socketInterface";

export interface ILayoutSlice{
    alert:IAlertInterface
    activeUsers:IUser[]
    searchedCommunity:ICommunity[]
    searchedUser:IUser[]
}


export const initalState:ILayoutSlice={
    alert:{
        isActive:false,
        content:"",
        link:""
    },
    activeUsers:[],
    searchedCommunity:[],
    searchedUser:[],


}
export const layoutSlice = createSlice({
    name:"layout",
    initialState:initalState,
    reducers:{
        openAlert(state,action:PayloadAction<IOpenAlert>){
            state.alert.isActive = true
            state.alert.content = action.payload.content
            state.alert.link = action.payload.link
        },
        closeAlert(state){
            state.alert.isActive = false
            state.alert.content = ""
            state.alert.link = ""
        },
        setOnlineusers(state,action:PayloadAction<IUser[]>){
            state.activeUsers = action.payload
        },
        setCommunitySearch(state,action:PayloadAction<ICommunity[]>){
            state.searchedCommunity = action.payload
        },
        setSearhResult(state,action:PayloadAction<IGlobalSearchResponse>){
            state.searchedCommunity = action.payload.community
            state.searchedUser = action.payload.user
        }
    }
})

export const layoutActions = layoutSlice.actions
export const authType = (state:IRootState)=>state.layout
export default layoutSlice.reducer
