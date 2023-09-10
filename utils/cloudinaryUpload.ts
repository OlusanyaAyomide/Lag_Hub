import axios,{AxiosResponse} from "axios";

export interface IResponse{
    public_id:string
 }
 

export const cloudinaryUploader = ({file,type}:{file:File,type:string})=>{
    const data = new FormData

    console.log(file,type)
    data.append("file", file, file.name);
    data.append("upload_preset", "h8tqiw8w");
    data.append("cloud_name", "da3wqzkz3");
    data.append("folder", "Cloudinary-React");

    return axios.post(
        `https://api.cloudinary.com/v1_1/da3wqzkz3/${type}/upload`,
        data
    ) as Promise<AxiosResponse<IResponse>>
}