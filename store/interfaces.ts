import { IPostWithMessage } from "@/utils/responeInterface"

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
}

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
        // limit:number
        // total:number
        isLast:boolean
        data:IPost[]
    }
}

export interface IPostSlice{
    data:IPost[]
    page:number
    isLast:boolean
    currentPost:string | null
    currentMessages:IPostMessage[]

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