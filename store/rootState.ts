import { IAuthSlice } from "./authSlice"
import { IPostSlice, IpostDetailSlice } from "./interfaces"
import { ILayoutSlice } from "./layoutSlice"

export interface IRootState{
    user:IAuthSlice,
    post:IPostSlice,
    layout:ILayoutSlice
    postdetail:IpostDetailSlice
}