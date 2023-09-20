import { IAuthSlice } from "./authSlice"
import { ICommunitySlice } from "./communitySlice"
import { IDmList, IPostSlice, ISearchSlice, IpostDetailSlice, IprivateChatSlice } from "./interfaces"
import { ILayoutSlice } from "./layoutSlice"

export interface IRootState{
    user:IAuthSlice,
    post:IPostSlice,
    layout:ILayoutSlice
    postdetail:IpostDetailSlice
    search:ISearchSlice
    community:ICommunitySlice
    dmlist:IDmList
    privateChat:IprivateChatSlice
}