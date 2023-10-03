import { ICommunity, ICommunityData, ICommunityMessage, IDmResponse, IDmSingleChat, IPost, IPostMessage } from "@/store/interfaces";
import { IProfileEdit } from "./interfaces";

export interface ISuccessRes{
  success: boolean;
  code: number;
  message: string;
}


export interface IgoogleLogInResponse{
    email:string,
    id: string
}

export interface IgoogleResponse extends IgoogleLogInResponse{
    family_name: string
    given_name: string
    picture:string
}

interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    profileImage: string;
    password: string;
    profileTheme: string;
    followers:number;
    following:number,
    createdAt:string,
    username:string
    lastSeen:string
    unread:number
  }

export interface IProfileResponse extends ISuccessRes{
    data: {
    user: IUser;
  };
}

export interface ISignInResponse extends ISuccessRes {
    data: {
      user: IUser;
      token: string;
    };
}

export interface ISinglePostResponse extends ISuccessRes{
    data:IPost
}

export interface IPostWithMessage extends IPost{
  messages:IPostMessage[]
}

export interface IPostInfo extends  ISuccessRes{
    data:IPostWithMessage
}

export interface ISingleMessageResponse extends ISuccessRes{
  data:IPostMessage
}


export interface ICommunityListResponse extends ISuccessRes{
  data:{
    active:ICommunity[]
    userCommunity:ICommunity[]
  }

}

export interface INewCommunityResponse extends ISuccessRes{
    data:ICommunity
}

export interface ICommunityInfoResponse extends ISuccessRes{
    data:ICommunityData
}

export interface ICommunityUser extends ISuccessRes{
  data:{
    users:IUser
  }[]
}


export interface IUSerDmResponse extends ISuccessRes{
  data:{
    totalUnreadCount: number
    conversations:IDmResponse[]
  }
}



export interface IPrivateChatResponse extends ISuccessRes{
    data:{
      messages:IDmSingleChat[]
      chatUser:IUser
    }
    
}


export interface ISetIsTyping{
  chatUser:string
  isTyping:boolean
}

export interface IPostComment{
  _id: string
  text: string
  message:string
  customId:string
  createdAt:string
  postUser:IUser
  post:IPost
}

export interface IUserProfile extends IUser{
   comments:IPostComment[]
   isfollowing:boolean
   posts:IPost[]


} 

export interface IUserProfileResponse extends ISuccessRes{
   data:IUserProfile
}


export interface IExisitingUser extends ISuccessRes{
  data:{
    username:string
  }
}


export interface IEditProfileResponse extends ISuccessRes{
  data:IProfileEdit
}

export interface INotification{
  _id: string,
  user: string,
  content: string,
  link: string,
  createdAt: string,
}

export interface INotificationResponse extends ISuccessRes{
  data:INotification[]
}