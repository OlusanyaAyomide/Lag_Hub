import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IRootState } from "./rootState";
import { IAlertInterface, ICommunity, ICommunityMessage, IUser, initialCommunity } from "./interfaces";
import { IOpenAlert } from "@/utils/socketInterface";
import { ICommunityData } from "./interfaces";
import { ICommunityAlert } from "@/utils/interfaces";


export interface ITypingUsers{
    community:ICommunity
    username:string
}
export interface ICommunitySlice{
   community:ICommunityData
   alert:{
    isToast:boolean
    link:string
    content:string
   }
   typingUsers:string[]

}


export const initalState:ICommunitySlice={
    community:{
        communityDetail:initialCommunity,
        isMember:false,
        userCount:0,
        messages:[]
    },
    alert:{
        isToast:false,
        link:"",
        content:""
    },
    typingUsers:[]


}
export const communitySlice = createSlice({
    name:"community",
    initialState:initalState, 
    reducers:{
        setCommunityInfo(state,action:PayloadAction<ICommunityData>){
            state.community = action.payload
            state.typingUsers = []
        },
        joinCommunity(state){
            state.community.isMember = true
        },
        AddNewMessage(state,action:PayloadAction<ICommunityMessage>){
            if(action.payload.community !== state.community.communityDetail?.customId){return}
            const isPresent = state.community.messages.some(message=>message._id === action.payload._id)
            if(isPresent){return}

            state.community.messages =[...state.community.messages,action.payload]
            setTimeout(()=>{ window.scrollTo(0, document.body.scrollHeight);})
        },
        communityToast(state,action:PayloadAction<ICommunityAlert>){
            const {community,alert} = action.payload
            if(state.community.communityDetail.customId !== community.customId){
                state.alert.isToast = true
                state.alert.content = alert.content
                state.alert.link = alert.link
            }
        },
        closeToast(state){
            state.alert.isToast = false
            state.alert.content = ""
            state.alert.link = ""
        },
        addNewTypingUser(state,action:PayloadAction<ITypingUsers>){
            if(state.community.communityDetail.customId !== action.payload.community.customId){return}
            const isPresent = state.typingUsers.some(user=>user === action.payload.username)
            if(isPresent){return}

            state.typingUsers = [action.payload.username,...state.typingUsers]
        },
        removeTypingUser(state,action:PayloadAction<ITypingUsers>){
            if(state.community.communityDetail.customId !== action.payload.community.customId){return}
            const newArray:string[] = []
            state.typingUsers.map((item)=>{
                if(action.payload.username !== item){newArray.push(item)}
            })
            state.typingUsers = newArray
        },
        emptyCommunity(state){
            state.community.communityDetail = initialCommunity
        }
    }
})

export const communityActions = communitySlice.actions
export const authType = (state:IRootState)=>state.community
export default communitySlice.reducer
