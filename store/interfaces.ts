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
    reposted: boolean;
    createdAt: string;
    likes: number;
    isliked: boolean;
    postUser:IUser;
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