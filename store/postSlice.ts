import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IRootState } from "./rootState";
import { IPostSlice,IEditPost, IPost, IPostMessage, IsetPost } from "./interfaces";
import { shuffleArray } from "@/lib/utils";


export const initalState:IPostSlice={
    data:[],
    page:1,
    isLast:false,
    currentPost:null,
    currentMessages:[],
    autoLoad:true
}
export const postSlice = createSlice({
    name:"post",
    initialState:initalState,
    reducers:{
        setPosts(state,action:PayloadAction<IsetPost>){
            console.log("Increasing")
            const {data,isLast,page} =action.payload
            const newposts = shuffleArray(data)

            state.data = [...state.data,...newposts]
            state.isLast = isLast
            state.page = page
        },
        disbleload(state){
            state.autoLoad = false
        },
        enableload(state){
            if(state.autoLoad === true){return}
            state.autoLoad = true
            if(!state.isLast){
                state.page +=1
            }
            
        },
        increasePage(state){
            state.page = state.page + 1
            state.autoLoad = true
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
            const isPresent = state.data.some(post=>post._id === action.payload._id)
            if(isPresent){return}
            state.data = [action.payload,...state.data]
        },
        appendNewPost(state,action:PayloadAction<IPost>){
            const isPresent = state.data.some(post=>post._id === action.payload._id)
            console.log(isPresent)
            console.log(state.data)
            console.log(action.payload)
            if(isPresent){return}
            
            state.data = [...state.data,action.payload]
            console.log("End append")
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
            const isPresent = state.currentMessages.some((newmessage=>newmessage._id === action.payload._id))
            if(isPresent){return}
            
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
