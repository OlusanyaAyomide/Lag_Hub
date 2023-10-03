import React,{useEffect, useRef, useState} from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Icons } from '@/utils/icons'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { useFormik } from 'formik'
import { ICommunityForm } from '@/utils/interfaces'
import { validatenwCommunity } from '../utils/validator'
import { cloudinaryUploader,IResponse } from '@/utils/cloudinaryUpload'
import { usePostRequest } from '@/hooks/useRequestProcessor'
import { addNewCommunity as mutationFn } from '@/hooks/requests/endPoints'
import RadioLoader from '../utils/RadioLoader'
import { AxiosResponse } from 'axios'
import socket from '@/sockets/sockets'
import { ICommunity } from '@/store/interfaces'
import { imgUrl } from '@/utils/tempKeys'
import { useRouter } from 'next/router'
import { INewCommunityResponse } from '@/utils/responeInterface'


interface INewCommunity extends ICommunityForm{
    closeref:React.RefObject<HTMLButtonElement>
    toggler:React.Dispatch<React.SetStateAction<number>>
}

export default function NewCommunity({description,name,communityImage,closeref,toggler}:INewCommunity) {
    const ref = useRef<HTMLInputElement>(null)
    const [communityFile,setCommunityFile] = useState<File | null>(null)
    const router = useRouter()

    const {isLoading:Loading,mutate:upload} = usePostRequest({mutationFn:cloudinaryUploader,onSuccess:({data:{public_id}}:AxiosResponse<IResponse>)=>{
        const {name,description} = formik.values
        mutate({name,description,communityImage:`${imgUrl}${public_id}`})
    }})
    const {isLoading,mutate} = usePostRequest({mutationFn,sucessText:"New community created",onSuccess:({data:{data}}:AxiosResponse<INewCommunityResponse>)=>{
        closeref.current?.click()
        // toggler((prev=>prev+1))
        socket.emit("new-community",data)
        router.push(`/community/chat/${data.slug}`)
    }})

    const loading = isLoading || Loading

    const formik = useFormik<ICommunityForm>({initialValues:{
        description:description || "",
        name:name || "",
        communityImage:communityImage || ""},
        validateOnChange:false,
        validate:validatenwCommunity,
        onSubmit:(values)=>{
            if(communityFile){
                upload({file:communityFile,type:"image"})
                return
            }
            mutate(values)
        },
    })

    const handleUpload = (e:React.ChangeEvent<HTMLInputElement>)=>{
        URL.revokeObjectURL(formik.values.communityImage || "")
        const files = e.target.files
        if(files && files[0]){
            const url = URL.createObjectURL(files[0])
            setCommunityFile(files[0])
            formik.setFieldValue("communityImage",url)
        }
    }

    useEffect(()=>{return ()=>{
        URL.revokeObjectURL(formik.values.communityImage || "")
    }},[formik.values.communityImage])
    return (
    <div>
        <h1 className="text-center font-medium mb-6  border-b  bigtext">Create New Community</h1>
   
        <form onSubmit={formik.handleSubmit}>
            <div onClick={()=>{ref.current?.click()}} className="h-fit w-fit mb-1 pb-2 mx-auto relative">
                <h1 className="text-center mb-1">Communit Image</h1>
                <Avatar className='block mx-auto h-24 w-24 sm:h-28 border sm:w-28'>
                    <AvatarFallback>Lh</AvatarFallback>
                    <AvatarImage src={formik.values.communityImage || "/communityholder.jpg"}/>
                </Avatar>
                <Icons.camera className='absolute bottom-4 right-1 text-lg text-shade'/>
            </div>
            {formik.errors.communityImage && 
            <h1 className='text-red-500 text-[11px] left-2 text-center'>{formik.errors.communityImage}</h1>}

            <div className='pb-2 mb-1 relative'>
                <span className="block mb-1">Community Name</span>
                <Input name='name'  
                    value={formik.values.name} 
                    placeholder="Enter Community Name"
                    onChange={formik.handleChange}
                    />
                    {formik.errors.name &&
                        <span className='text-red-500 text-[11px]'>{formik.errors.name}</span>
                    }
            </div>
            <div className='mb-3'>
                <span className="block mb-1">Group Description</span>
                <Textarea className='focus-visible:ring-1 resize-none'
                    value={formik.values.description}
                    name='description'
                    placeholder='Enter community description'
                    onChange={formik.handleChange}
                ></Textarea>
                { formik.errors.description &&
                    <span className='text-red-500 left-2 text-[11px]'>{formik.errors.description}</span>
                }
            </div>
            <div className='flex-center mb-6'>
                <input accept="image/*" onChange={handleUpload} type="file" className='hidden' ref={ref}/>
            </div>
            <Button disabled={loading} type='submit' className='px-8 flex items-center justify-center bg-main mx-auto text-white hover:bg-blue-500'>
                {loading?<RadioLoader/>:<span>Create New Community</span>}
            </Button>
        </form>
    </div>
  )
}
