import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "./rootState";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IDmSingleChat, IUser, IprivateChatSlice } from "./interfaces";
import { ISetIsTyping } from "@/utils/responeInterface";
import { IDmAlert } from "@/utils/socketInterface";



interface ISetInfo{
    chatUser:IUser
    messages:IDmSingleChat[]
}



export const initalState:IprivateChatSlice={
    chatUser:{} as IUser,
    username:"",
    messages:[],
    isTyping:false,
    alert:{
        isToast:false,
        link:"",
        content:"",
    }
}
export const privateChatSlice = createSlice({
    name:"privateChat",
    initialState:initalState,
    reducers:{
        setChatInfo(state,action:PayloadAction<ISetInfo>){
            state.chatUser = action.payload.chatUser
            state.messages = action.payload.messages
        },
        addNewMessage(state,action:PayloadAction<IDmSingleChat>){
            const isPresent = state.messages.some((message=>message._id === action.payload._id))
            if(isPresent){return}
            const isInDm = state.chatUser.username === action.payload.sender.username
            const isUser = state.username === action.payload.sender.username
            if(!(isInDm || isUser)){return}
            state.messages = [...state.messages,action.payload]
            setTimeout(()=>{ 
                window.scrollTo(0, document.body.scrollHeight)
            ;})
  
        },
        editDmMessage(state,action:PayloadAction<IDmSingleChat>){
            const newArray:IDmSingleChat[]=[]
            state.messages.map((item)=>{
                if(item._id !== action.payload._id){
                    newArray.push(item)
                }
                else{
                    newArray.push(action.payload)
                }
            })
            state.messages = newArray
        },
        changeTypingStatus(state,action:PayloadAction<ISetIsTyping>){
            if(action.payload.chatUser !== state.chatUser.username){return}
            state.isTyping =action.payload.isTyping
        },
        openAlert(state,action:PayloadAction<IDmAlert>){
            if(state.chatUser.username === action.payload.username){return}
            state.alert.isToast = true
            state.alert.content = action.payload.content
            state.alert.link = action.payload.link
        },
        closeAlert(state){
            state.alert.isToast =false
            state.alert.content =""
            state.alert.link = ""
        },
        setUsername(state,action:PayloadAction<string>){
            state.username = action.payload
        }
    }
})

export const privateChatActions = privateChatSlice.actions
export const authType = (state:IRootState)=>state.privateChat
export default privateChatSlice.reducer
