import { io } from 'socket.io-client';
import {parseCookies} from "nookies"
import Cookies from 'js-cookie';

const URL =  'http://localhost:4000';
// const URL = 'https://laghub-backend.onrender.com'



// const token = window.localStorage.getItem("authtoken")
// export const socket = io(URL,{
//     auth:{
//         token:Cookies.get("authCookie")
//     }
// });

export const socket = io(URL,{autoConnect:false});


export default socket