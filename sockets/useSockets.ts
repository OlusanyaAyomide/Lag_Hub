import {useEffect} from "react"
import socket from "./sockets"
import { ICommunity, ICommunityMessage, IPost, IPostMessage, IUser } from "@/store/interfaces"
import { useAppDispatch } from "@/hooks/reduxHooks"
import { postActions } from "@/store/postSlice"
import { IOpenAlert } from "@/utils/socketInterface"
import { layoutActions } from "@/store/layoutSlice"
import { usePathname } from "next/navigation"
import { postDetailActions } from "@/store/postDetailSlice"
import { useRouter } from "next/router"
import { ITypingUsers, communityActions } from "@/store/communitySlice"
import { ICommunityAlert } from "@/utils/interfaces"


export const useSockets = ()=>{
    const dispatch = useAppDispatch()
    const isHome = usePathname() === "/"
    // const router = useRouter()
    // const {Slug} = router.query
    // console.log(Slug,router.query)


    useEffect(()=>{
        socket.on("connect",()=>{
            console.log("Socket Conected")
        })
        socket.on("connect_error", (err) => {
          console.log(err.message);
        });
        socket.on('disconnect', ()=>{
            dispatch(layoutActions.setOnlineusers([]))
        });
        socket.on("emit-like-post",(post:IPost)=>{
            dispatch(postActions.likePostDispatch({_id:post._id,post}))
            if(!isHome){dispatch(postDetailActions.editCurrentPost(post))}
        })
        socket.on("emit-alert",(body:IOpenAlert)=>{
            dispatch(layoutActions.openAlert(body))
        })
        socket.on("emit-new-post",(post:IPost)=>{
            dispatch(postActions.appendNewPost(post))
        })
        socket.on("emit-post-messsage",(message:IPostMessage)=>{
            dispatch(postActions.dispatchFeedpost(message))
            if(!isHome){dispatch(postDetailActions.appendNewMessage(message))}
        })
        socket.on("emit-post-reply",(message:IPostMessage)=>{
            dispatch(postActions.editRepliedMessage(message))
            if(!isHome){dispatch(postDetailActions.editRepliedMessage(message))}
        })
        socket.on("emit-online",(users:IUser[])=>{
            dispatch(layoutActions.setOnlineusers(users))
        })
        socket.on("emit-community-search",(communities:ICommunity[])=>{
            dispatch(layoutActions.setCommunitySearch(communities))
        })
        socket.on("emit-community-alert",(body:ICommunityAlert)=>{
            dispatch(communityActions.communityToast(body))
        })
        socket.on("emit-community-message",(message:ICommunityMessage)=>{
            dispatch(communityActions.AddNewMessage(message))  
        })
        socket.on("emit-community-joined",()=>{
            dispatch(communityActions.joinCommunity())
        })
        socket.on("emit-typing",(body:ITypingUsers)=>{
            console.log("event received")
            dispatch(communityActions.addNewTypingUser(body))
        })
        socket.on("emit-stop-typing",(body:ITypingUsers)=>{
            dispatch(communityActions.removeTypingUser(body))
        })

    },[isHome])
    
    return null
}