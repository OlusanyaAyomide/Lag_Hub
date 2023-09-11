import {useEffect} from "react"
import socket from "./sockets"
import { IPost } from "@/store/interfaces"
import { useAppDispatch } from "@/hooks/reduxHooks"
import { postActions } from "@/store/postSlice"
import { IOpenAlert } from "@/utils/socketInterface"
import { layoutActions } from "@/store/layoutSlice"

export const useSockets = ()=>{
    const dispatch = useAppDispatch()
    useEffect(()=>{
        socket.on("connect",()=>{
            console.log("Socket Conected")
        })
        socket.on("connect_error", (err) => {
          console.log(err.message);
        });
        socket.on('disconnect', ()=>{
            console.log("socket disconnected")
        });
        socket.on("emit-like-post",(post:IPost)=>{
            dispatch(postActions.likePostDispatch({_id:post._id,post}))
        })
        socket.on("emit-alert",(body:IOpenAlert)=>{
            dispatch(layoutActions.openAlert(body))
        })
        
        // return ()=>{
        //     socket.off('connect');
        //     socket.off('disconnect');
        //     socket.off("connect_error")
        // }
    },[])
    
    return null
}