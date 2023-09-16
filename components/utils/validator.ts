import { ICommunityForm } from "@/utils/interfaces"
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