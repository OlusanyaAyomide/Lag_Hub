import { IPostWithMessage, ISuccessRes } from "@/utils/responeInterface"

export interface IUserRequest {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profileImage: string;
    password: string;
    profileTheme: string;
  }

export interface IUser{
    _id:string
    firstName:string,
    lastName:string,
    username:string
    email:string,
    profileImage:string,
    profileTheme:string,
    followers:number
    following:number
    createdAt:string
    lastSeen:string
    unread:number
   
}
export const initialUser: IUser = {
    _id: "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    profileImage: "",
    profileTheme: "",
    followers: 0,
    following: 0,
    createdAt: "",
    lastSeen: "",
    unread: 0, 
  };

export interface IPost {
    _id: string;
    type: 'video' | 'image'|'text';
    description: string;
    postUrl: string;
    customId: string;
    repostCount: number;
    postedBy: string;
    reposted: boolean | string;
    createdAt: string;
    likes: number;
    isliked: boolean;
    postUser:IUser;
    repostedTheme?:string,
    repostedAvatar?:string,
    postedAt?:string
    repostedId?:string
    authorId?:string
    repostedusername?:string
}



export interface IPostsResponse{
    success:boolean
    data:{
        page:number
        isLast:boolean
        data:IPost[]
    }
}

export interface IsetPost{
    page:number
    isLast:boolean
    data:IPost[]
}

export interface IPostSlice{
    data:IPost[]
    page:number
    isLast:boolean
    currentPost:string | null
    currentMessages:IPostMessage[]
    autoLoad:boolean

}

export interface IEditPost{
    _id:string
    post:IPost
}

export interface IAlertInterface{
    isActive:boolean
    content:string   
    link:string
}

export interface IPostReply{
    _id: string
    text: string
    message:string
    customId:string
    createdAt:string
    user:IUser
}

export interface IPostMessage{
    _id: string,
    user:string,
    post: string,
    text: string,
    customId:string,
    createdAt:string,
    messageUser:IUser
    replies:IPostReply[]
}

export interface IpostDetailSlice{
    post:IPost
    messages:IPostMessage[]
}


export interface IDetailParams{
    customId:string | string [] | undefined
    post:IPost
}

export interface ISearchSlice{
    globalSearch:IUser[]
}


export interface ICommunity{
    _id: string;
    name: string;
    customId: string;
    description: string;
    communityImage: string;
    createdAt: string;
    slug: string;
}

export const initialCommunity: ICommunity = {
  _id: "",
  name: "",
  customId: "",
  description: "",
  communityImage: "",
  createdAt: "",
  slug: ""
};

export type IMessageType="image" |"text"|"system"

export interface ICommunityMessage{
    _id: string,
    user:string,
    community:string,
    type: IMessageType,
    text: string,
    imageUrl:string,
    createdAt:string,
    messageUser:IUser
}

export interface ICommunityData{
    communityDetail:ICommunity
    userCount:number
    isMember:boolean
    messages:ICommunityMessage[]

}
export interface IDmResponse{
    user:IUser
    lastMessage:string
    createdAt:string
    unreadCount:number
    lastIsRead:boolean
}

export interface IDmList{
    conversations:IDmResponse[]

}

export interface IDmSingleChat{
    _id:string
    sender:IUser
    receiver:IUser
    text:string
    type:"image" | "text"
    isRead:boolean
    createdAt:string
    imageUrl:string

}

export interface IprivateChatSlice{
    chatUser:IUser
    username:string
    messages:IDmSingleChat[]
    isTyping:boolean
    alert:{
        isToast:boolean,
        link:string,
        content:string    },
}


export interface ITiktokVideos{
    video_id:string
    region:string
    title:string
    play_count:string
    duration:number
    play:string
    share_count:string
    author:{
        nickname:string
        avatar:string
    }
}


export interface ITikTokResponse extends ISuccessRes{
    data:ITikTokSlice
}

export interface ITikTokSlice{
    cursor:number
    hasMore:boolean
    videos:ITiktokVideos[]   
}
type AiMessage = "human" | "ai"

export interface IAiSingleChat{
    createdAt?:string
    type:AiMessage
    message:string
}
export interface ILiamSlice{
    messages:IAiSingleChat[]
}


export interface  IAIChatResponse{
    messages:IAiSingleChat[]
}