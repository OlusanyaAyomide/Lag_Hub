import { IAuthSlice } from "./authSlice"
import { IPostSlice } from "./postSlice"

export interface IRootState{
    user:IAuthSlice,
    post:IPostSlice
}