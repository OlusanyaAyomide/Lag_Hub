import { io } from 'socket.io-client';
import {parseCookies} from "nookies"
import Cookies from 'js-cookie';

const URL =  'http://localhost:4000';




const {authCookie} = parseCookies()
console.log(authCookie)
// const token = window.localStorage.getItem("authtoken")
export const socket = io(URL,{
    auth:{
        token:Cookies.get("authCookie")
    }
});


export default socket