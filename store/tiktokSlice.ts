import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IRootState } from "./rootState";
import { ITikTokSlice } from "./interfaces";




export const initalState:ITikTokSlice={
    cursor:1,
    hasMore:true,
    videos:[]
}
export const tiktokSlice = createSlice({
    name:"tiktok",
    initialState:initalState,
    reducers:{
        setTiktokVideos(state,action:PayloadAction<ITikTokSlice>){
            state.hasMore = action.payload.hasMore
            state.videos = [...state.videos,...action.payload.videos]
        },
        increasePage(state){
            state.cursor = state.cursor + 1
        }
    }
})

export const tiktokActions = tiktokSlice.actions
export const authType = (state:IRootState)=>state.tiktok
export default tiktokSlice.reducer
