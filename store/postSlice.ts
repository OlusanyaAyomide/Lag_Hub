import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IRootState } from "./rootState";
import { IPost} from "./interfaces";

export interface IPostSlice{
    data:IPost[]
    page:number
    isLast:boolean
}

export const initalState:IPostSlice={
    data:[],
    page:1,
    isLast:false
}
export const postSlice = createSlice({
    name:"post",
    initialState:initalState,
    reducers:{
        setPosts(state,action:PayloadAction<IPostSlice>){
            const {data,isLast,page} =action.payload
            state.data = [...state.data,...data]
            state.isLast = isLast
            state.page = page
        }
    }
})

export const postActions = postSlice.actions
export const authType = (state:IRootState)=>state.post
export default postSlice.reducer
