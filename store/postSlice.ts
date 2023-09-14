import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IRootState } from "./rootState";
import { IPostSlice,IEditPost, IPost, IPostMessage } from "./interfaces";
import { shuffleArray } from "@/lib/utils";


export const initalState:IPostSlice={
    data:[],
    page:1,
    isLast:false,
    currentPost:null,
    currentMessages:[]
}
export const postSlice = createSlice({
    name:"post",
    initialState:initalState,
    reducers:{
        setPosts(state,action:PayloadAction<IPostSlice>){
            const {data,isLast,page} =action.payload
            const newposts = shuffleArray(data)

            state.data = [...state.data,...newposts]
            state.isLast = isLast
            state.page = page
        },
        increasePage(state){
            state.page = state.page + 1
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
        pushnewPost(state,action:PayloadAction<IPost>){
            state.data = [action.payload,...state.data]
        },
        appendNewPost(state,action:PayloadAction<IPost>){
            state.data = [...state.data,action.payload]
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
        },
        setCurrentPost(state,action:PayloadAction<string | null>){
            state.currentPost = action.payload
        },
        setCurrentMessages(state,action:PayloadAction<IPostMessage[]>){
            state.currentMessages =action.payload
        },
        dispatchFeedpost(state,action:PayloadAction<IPostMessage>){
            const message = action.payload
            if(state.currentPost !== message.post){return}

            if(state.currentMessages?.length < 4){
                state.currentMessages = [...state.currentMessages,action.payload]
            }
            else{
                state.currentMessages[3] = action.payload
            }
        },
        editRepliedMessage(state,action:PayloadAction<IPostMessage>){
            const message = action.payload
            if(state.currentPost !== message.post){return}
            const newMessages:IPostMessage[] = []
            state.currentMessages.map((item)=>{
                if(item._id !== action.payload._id){
                    newMessages.push(item)
                    return
                }
                newMessages.push(action.payload)
            })
            state.currentMessages = newMessages
        },


        addnewFeedPost(state,action:PayloadAction<IPostMessage>){
            state.currentMessages = [action.payload,...state.currentMessages]
        }
        
    }
})

export const postActions = postSlice.actions
export const authType = (state:IRootState)=>state.post
export default postSlice.reducer
