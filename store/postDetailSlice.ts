import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IRootState } from "./rootState";
import { IPostSlice,IEditPost, IPost, IPostMessage, IpostDetailSlice, IDetailParams } from "./interfaces";
import { shuffleArray } from "@/lib/utils";
import { IPostWithMessage } from "@/utils/responeInterface";



export const initalState:IpostDetailSlice={
    post:{} as IPost, 
    messages:[]
}
export const postDetailSlice = createSlice({
    name:"postdetail",
    initialState:initalState,
    reducers:{
        setSinglePost(state,action:PayloadAction<IPostWithMessage>){
            state.post = action.payload
            state.messages = action.payload.messages
        },//for like/comment
        setJustPost(state,action:PayloadAction<IPost>){
            state.post = action.payload
        },
        editCurrentPost(state,action:PayloadAction<IPost>){
            if(action.payload.customId !== state.post.customId){return}
            const isliked = state.post.isliked
            state.post = {...action.payload,isliked}
        },//disptch like to others
        addNewMessage(state,action:PayloadAction<IPostMessage>){
            state.messages = [action.payload,...state.messages]
        },
        editRepliedMessage(state,action:PayloadAction<IPostMessage>){
            if(action.payload.post !== state.post._id){return}
            const newMessages:IPostMessage[] = []
            state.messages.map((item)=>{
                if(item._id !== action.payload._id){
                    newMessages.push(item)
                    return
                }
                newMessages.push(action.payload)
            })
            state.messages = newMessages
        },
        appendNewMessage(state,action:PayloadAction<IPostMessage>){
            if(action.payload.post !== state.post._id){return}
            const isPresent = state.messages.some(newmessage => newmessage._id === action.payload._id)
            if(isPresent){return}
            state.messages = [...state.messages,action.payload]
        }
        
    }
})

export const postDetailActions = postDetailSlice.actions
export const authType = (state:IRootState)=>state.postdetail
export default postDetailSlice.reducer
