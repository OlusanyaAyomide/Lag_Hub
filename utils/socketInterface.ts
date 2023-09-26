import { ICommunity, IUser } from "@/store/interfaces"

export interface IOpenAlert{
    content:string,
    link:string
}
export interface IDmAlert extends IOpenAlert{
    username:string
}


export interface IGlobalSearchResponse{
    user:IUser[]
    community:ICommunity[]
}