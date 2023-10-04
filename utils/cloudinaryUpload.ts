import axios,{AxiosResponse} from "axios";
import { cloudName, uploadPreset } from "./tempKeys";

export interface IResponse{
    public_id:string
 }
 

export const cloudinaryUploader = ({file,type}:{file:File,type:string})=>{
    const data = new FormData

    data.append("file", file, file.name);
    data.append("upload_preset", uploadPreset);
    data.append("cloud_name", cloudName);
    data.append("folder", "Cloudinary-React");

    return axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/${type}/upload`,
        data
    ) as Promise<AxiosResponse<IResponse>>
}