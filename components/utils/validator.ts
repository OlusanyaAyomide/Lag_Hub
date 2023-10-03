import { ICommunityForm, IProfileEdit, ISignIn, ISignUp } from "@/utils/interfaces"
import { areAllValuesEmpty } from "./areAllValuesEmpty"



export const validatenwCommunity = ({name,description,communityImage}:ICommunityForm)=>{
    const error = {} as ICommunityForm 
    error.name = !name?"Field is required":name.length>40?"Community name is to long":""
    error.description = !description?"Description is required":""
    error.communityImage = !communityImage?"Community Image is required":""
    if(!areAllValuesEmpty(error)){
        return error
    }
}


export const validateSignIn =({email,password}:ISignIn)=>{
    const error = {} as ISignIn
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    error.email = !email?"Email field is required":!emailRegex.test(email)?"Email is not valid":""
    error.password = !password?"Password field is required":password.length <5?"password is to short":""
    if(!areAllValuesEmpty(error)){
        return error
    }
}

export const validateSignUp=(value:ISignUp)=>{
    const error = {} as ISignUp
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    error.email = !value.email?"Email field is required":!emailRegex.test(value.email)?"Email is not valid":""
    error.password = !value.password?"Password field is required":value.password.length <5?"password is to short":""
    error.firstName = !value.firstName?"firstName is required":""
    error.lastName = !value.lastName?"Lastname is required":""
    error.username = !value.username?"Username is required":""
    if(!areAllValuesEmpty(error)){
        return error
    }


}

export const validateProfileUpdate=(value:IProfileEdit)=>{
    const error = {} as IProfileEdit
    error.firstName = !value.firstName?"firstName is required":""
    error.lastName = !value.lastName?"Lastname is required":""
    if(!areAllValuesEmpty(error)){
        return error
    }

}