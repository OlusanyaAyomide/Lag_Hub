import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IRootState } from "./rootState";
import { ISearchSlice } from "./interfaces";




export const initalState:ISearchSlice={
    globalSearch:[]
}
export const seacrhDetailSlice = createSlice({
    name:"search",
    initialState:initalState,
    reducers:{
        
    }
})

export const seacrhDetailActions = seacrhDetailSlice.actions
export const authType = (state:IRootState)=>state.search
export default seacrhDetailSlice.reducer
