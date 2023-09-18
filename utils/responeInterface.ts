import { ICommunity, ICommunityData, ICommunityMessage, IPost, IPostMessage } from "@/store/interfaces";

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



  