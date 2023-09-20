import { configureStore } from "@reduxjs/toolkit";
import  userSlice from "./authSlice";
import postSlice from "./postSlice";
import layoutSlice from "./layoutSlice";
import postDetailSlice from "./postDetailSlice";
import seacrhSlice from "./seacrhSlice";
import communitySlice from "./communitySlice";
import dmListSlice from "./dmListSlice";
import privateChatSlice from "./privateChatSlice";


export const store = configureStore({
    reducer:{
        user:userSlice,
        post:postSlice,
        layout:layoutSlice,
        postdetail:postDetailSlice,
        search:seacrhSlice,
        community:communitySlice,
        dmlist:dmListSlice,
        privateChat:privateChatSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch