import { IAuthSlice } from "./authSlice"
import { ICommunitySlice } from "./communitySlice"
import { IDmList, ILiamSlice, IPostSlice, ISearchSlice, ITikTokSlice, IpostDetailSlice, IprivateChatSlice } from "./interfaces"
import { ILayoutSlice } from "./layoutSlice"
import { IProfilePageSlice } from "./profilePageSlice"

export interface IRootState{
    user:IAuthSlice,
    post:IPostSlice,
    layout:ILayoutSlice
    postdetail:IpostDetailSlice
    search:ISearchSlice
    community:ICommunitySlice
    dmlist:IDmList
    privateChat:IprivateChatSlice
    tiktok:ITikTokSlice
    profilePage:IProfilePageSlice
    liam:ILiamSlice
}