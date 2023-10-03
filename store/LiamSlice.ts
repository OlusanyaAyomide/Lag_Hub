import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IRootState } from "./rootState";
import { IAiSingleChat, ILiamSlice } from "./interfaces";
import { firstAiChat } from "@/utils/constants";





export const initalState:ILiamSlice={
    messages:[]
}
export const liamSlice = createSlice({
    name:"liam",
    initialState:initalState,
    reducers:{
        setLiamChats(state,action:PayloadAction<IAiSingleChat[]>){
            state.messages =[firstAiChat,...action.payload]
        },
        setSingleChat(state,action:PayloadAction<IAiSingleChat>){
            state.messages =[...state.messages,action.payload]
        }
    }
})

export const liamActions = liamSlice.actions
export const authType = (state:IRootState)=>state.liam
export default liamSlice.reducer
