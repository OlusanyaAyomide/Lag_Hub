import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IRootState } from "./rootState";
import { IAlertInterface } from "./interfaces";
import { IOpenAlert } from "@/utils/socketInterface";

export interface ILayoutSlice{
    alert:IAlertInterface
}


export const initalState:ILayoutSlice={
    alert:{
        isActive:false,
        content:"",
        link:""
    }

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
        }
    }
})

export const layoutActions = layoutSlice.actions
export const authType = (state:IRootState)=>state.layout
export default layoutSlice.reducer
