import { IAuthSlice } from "./authSlice"
import { ICommunitySlice } from "./communitySlice"
import { IPostSlice, ISearchSlice, IpostDetailSlice } from "./interfaces"
import { ILayoutSlice } from "./layoutSlice"

export interface IRootState{
    user:IAuthSlice,
    post:IPostSlice,
    layout:ILayoutSlice
    postdetail:IpostDetailSlice
    search:ISearchSlice
    community:ICommunitySlice
}