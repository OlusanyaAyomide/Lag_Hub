import {useEffect} from "react"
import socket from "./sockets"

export const useSockets = ()=>{
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
        return ()=>{
            socket.off('connect');
            socket.off('disconnect');
            socket.off("connect_error")
        }
    },[])
    
    return null
}