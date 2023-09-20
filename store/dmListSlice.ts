import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "./rootState";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IDmList, IDmResponse } from "./interfaces";





export const initalState:IDmList={
    conversations:[]
}
export const dmListSlice = createSlice({
    name:"dmlist",
    initialState:initalState,
    reducers:{
        setUserDms(state,action:PayloadAction<IDmResponse[]>){
            state.conversations = action.payload
        }
    }
})

export const dmListActions = dmListSlice.actions
export const authType = (state:IRootState)=>state.dmlist
export default dmListSlice.reducer
