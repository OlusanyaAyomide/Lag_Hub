import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IRootState } from "./rootState";
import { IPostSlice,IEditPost, IPost } from "./interfaces";


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
        },
        
        editPosts(state,action:PayloadAction<IEditPost>){
            const newPost:IPost[] = []
            state.data.map((item)=>{
                if (item._id !== action.payload._id){
                    newPost.push(item)
                    return
                }
                newPost.push(action.payload.post)
            })
            state.data = newPost
        },

        likePostDispatch(state,action:PayloadAction<IEditPost>){
            const newPost:IPost[] = []
            state.data.map((item)=>{
                if (item._id !== action.payload._id){
                    newPost.push(item)
                    return
                }
                const isliked = item.isliked
                newPost.push({...action.payload.post,isliked})
            })
            state.data = newPost
        }
    }
})

export const postActions = postSlice.actions
export const authType = (state:IRootState)=>state.post
export default postSlice.reducer
