import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IRootState } from "./rootState";
import { IAlertInterface, ICommunity, ICommunityMessage, IUser } from "./interfaces";
import { IOpenAlert } from "@/utils/socketInterface";
import { ICommunityData } from "./interfaces";

export interface ICommunitySlice{
   community:ICommunityData
}


export const initalState:ICommunitySlice={
    community:{
        communityDetail:{} as ICommunity,
        isMember:false,
        userCount:0,
        messages:[]
    }

}
export const communitySlice = createSlice({
    name:"community",
    initialState:initalState, 
    reducers:{
        setCommunityInfo(state,action:PayloadAction<ICommunityData>){
            state.community = action.payload
        },
        joinCommunity(state){
            state.community.isMember = true
        },
        AddNewMessage(state,action:PayloadAction<ICommunityMessage>){
            if(action.payload.community !== state.community.communityDetail?.customId){return}
            state.community.messages =[...state.community.messages,action.payload]
            setTimeout(()=>{ window.scrollTo(0, document.body.scrollHeight);})
           
            
        }
    }
})

export const communityActions = communitySlice.actions
export const authType = (state:IRootState)=>state.community
export default communitySlice.reducer
